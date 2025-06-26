const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.loadFile(path.join('src', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC to start python renderer
ipcMain.handle('render-video', async (event, job) => {
  return new Promise((resolve, reject) => {
    const python = spawn('python3', [path.join(__dirname, '../backend/video_renderer.py')]);
    python.stdin.write(JSON.stringify(job));
    python.stdin.end();

    let data = '';
    python.stdout.on('data', chunk => data += chunk);
    python.stderr.on('data', chunk => console.error(chunk.toString()));

    python.on('close', code => {
      if (code === 0) {
        resolve(JSON.parse(data));
      } else {
        reject(new Error('Renderer exited with code ' + code));
      }
    });
  });
});
