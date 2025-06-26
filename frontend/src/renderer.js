// Example call to backend when user clicks export
async function exportVideo(config) {
  try {
    const result = await window.electronAPI.renderVideo(config);
    console.log('Render finished', result);
  } catch (err) {
    console.error('Render failed', err);
  }
}
