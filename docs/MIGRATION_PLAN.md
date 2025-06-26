# Migration Electron + Python

Ce document décrit la structure conseillée pour porter le projet web existant vers une application desktop.

## Structure

```
frontend/   # Application Electron (UI)
  main.js   # Processus principal
  preload.js
  package.json
  src/
    index.html    # Copie de l'ancienne interface
    renderer.js   # Logique front et appels IPC
backend/
  video_renderer.py  # Script Python MoviePy
```

## Flux général

1. L'utilisateur sélectionne son dossier et configure les options dans l'interface Electron.
2. En appuyant sur **Exporter**, le frontend sérialise tous les réglages dans un JSON et appelle `window.electronAPI.renderVideo(job)`.
3. Le processus principal lance `video_renderer.py` en lui passant ce JSON sur l'entrée standard.
4. Le script Python charge l'image, l'audio et le fichier LRC, applique les effets avec MoviePy puis écrit la vidéo de sortie.
5. Une fois terminé, le script renvoie un JSON contenant au minimum le chemin du fichier généré.
6. Le frontend reçoit ce résultat et peut afficher la progression ou les erreurs.

## Exemple de message JSON

```json
{
  "image": "/chemin/cover.jpg",
  "audio": "/chemin/song.mp3",
  "lrc": "/chemin/lyrics.lrc",
  "params": {
    "fps": 60,
    "output": "render.mp4",
    "effects": {
      "transitionIn": "slide-in-down",
      "fontSize": 70
    }
  }
}
```

## Feuille de route

- [ ] Transférer toutes les options de l'ancienne interface dans `renderer.js` pour construire l'objet JSON.
- [ ] Implémenter progressivement les effets dans `video_renderer.py` (transitions, particules, glow, etc.).
- [ ] Ajouter un système de presets (templates) côté frontend pour sauvegarder et charger des configurations.
- [ ] Prévoir un retour de progression via IPC (ex: en envoyant régulièrement un pourcentage depuis Python).

Ce dépôt fournit uniquement un squelette minimal pour démarrer la migration.
