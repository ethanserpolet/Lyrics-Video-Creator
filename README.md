# Lyric Video Creator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
**Lyric Video Creator** est une application web permettant de générer facilement des vidéos de paroles (“lyric videos”) à partir de fichiers image, audio et LRC.

---

## 📝 Description

Ce projet fournit une interface sobre et moderne (avec Tailwind CSS et “effet verre liquide”) pour importer :  
- Une image (ex. pochette d’album)  
- Un fichier audio (MP3, WAV, etc.)  
- Un fichier de paroles au format LRC

***Qu'est-ce-que un fichier LRC ???***

Le LRC (nom faisant référence au mot anglais lyrics qui est employé pour désigner les paroles d'une chanson) est un format de fichier contenant des paroles de chansons lisibles par les lecteurs MP3 compatibles. Les paroles sont dans un fichier texte d'extension .lrc et sont formatées pour permettre aux lecteurs MP3 de les afficher au moment précis où les paroles sont prononcées dans la chanson, comme pour le karaoké.
C'est un système à balises, comme HTML.

Exemple:
```
[ti:Princess of the Dawn]
[ar:Accept]
[al:Restless and Wild]
[by:Christophe Dang Ngoc Chan]

[00:15]There's rain on the mountain
```

On peut les retrouver librement notemment sur Musixmatch et les récupérer gratuitement avec ceci [MxLRC](https://github.com/fashni/MxLRC)
Ou les faire sois-même facilement et rapidement avec [LRCCreator](https://www.lrcgenerator.com/) , [LRCMaker](https://lrc-maker.github.io/) ou [LyricPotato](https://lyricpotato.com/)


__Et pour ensuite configurer votre Lyrics Vidéo a votre image__

---

## 🎬 Aperçu

![Capture d'écran de l'application](assets/screenshot.png)

*Video d’aperçu 1*
[![Aperçu 1](https://img.youtube.com/vi/aR_-BlYj1gM/0.jpg)](https://www.youtube.com/watch?v=aR_-BlYj1gM)  


---

## ⚙️ Fonctionnalités

- 📁 Import en lot d’image / audio / LRC  
- 🎞️ Aperçu en temps réel  
- 🌈 Contrôles avancés (flou, transitions, particules, synchro rythme…)  
- 🖋️ Police et couleur du texte modifiables  
- 📐 Choix du format, résolution, bitrate et framerate  
- 🚀 Export vidéo incluant la piste audio  

---

## 🚀 Installation

1. **Cloner le dépôt**  
   ```bash
   git clone https://github.com/ethanserpolet/Lyrics-Video-Creator.git
   cd Lyrics-Video-Creator
   ```
2. **Ouvrir directement le index.html (aucune dépendance serveur requise)**

---

## 🎛️ Utilisation

1. Cliquez sur **“Choisir des fichiers”** et sélectionnez un dossier contenant :  
   - Une image (`.png`, `.jpg`, `.webp`)  
   - Un audio (`.mp3`, `.wav`, …)  
   - Un fichier de paroles (`.lrc`)  

2. Ajustez les paramètres (format, transitions, effets, etc.)  
3. Appuyez sur **“Exporter la Vidéo”** pour générer et télécharger votre lyric video.  

---

## 🛠️ Développement

- Le projet est en **vanilla JS**, sans build step.  
- Les styles sont gérés par **Tailwind CSS** et un peu de CSS personnalisé.  
- Pour personnaliser Tailwind ou ajouter un workflow de build (PostCSS, Webpack…), il suffit d’ajouter la configuration correspondante.  

---

## 🎯 Objectifs & TODO

- **Améliorer le rendu visuel**  
  - Affiner les transitions (fluidité, timing)  
  - Améliorer l’intégration des effets (flou, particules, synchro rythme)  

- **Porter le projet en Python(Ou Autre language) + backend**  
  - Gérer l’upload et le rendu sur serveur  
  - Permettre un rendu plus propre et contrôlé côté serveur  

- **Optimiser les performances**  
  - Réduire l’impact mémoire et CPU lors de l’export  
  - Charger les ressources (image, LRC) de façon asynchrone  

- **Corriger les bugs connus**  
  - Problèmes de timing sur certains navigateurs  
  - Gestion des fichiers LRC mal formés  
  - Comportement du bouton “Exporter” après plusieurs exports  

- **Ajouter des paramètres de personnalisation avancés**  
  - Animation lettre par lettre (type « typewriter »)  
  - Nouvelles options d’effets de texte (masque, défilement, ondulation)  
  - Offset et métronomie fine pour la synchronisation  

---

### ✨ Idées supplémentaires

- **Export GIF & WebP animé**  
- **Mode batch** pour traiter plusieurs dossiers en une seule commande  
- **Interface mobile-responsive** et PWA (Progressive Web App)  
- **Thèmes clair/sombre** et localisation (FR / EN / ES…)  
- **API REST** pour automatiser le rendu depuis d’autres services  
- **Tests unitaires** et CI/CD (GitHub Actions)  
- **Documentation interactive** (Storybook, Docsify…)  
- **Plugin OBS** pour streamer directement la lyric video en live  

---

## 🤝 Contribuer

Les contributions sont les bienvenues !  
1. **Fork** ce dépôt  
2. **Crée** une branche  
   ```bash
   git checkout -b feat/ma-fonctionnalité
   ````
3. **Commit** avec messages clairs
   ```bash
   git commit -m "Ajoute le contrôle XYZ"
   ```
4. Ouvre une Pull Request ici


Merci de respecter ces quelques règles :
Pas de fichiers générés (build, bundles) dans le dépôt
Style de code cohérent (indentation, quotes…)
Mettre à jour / ajouter les tests si nécessaire
Réagir et répondre aux commentaires de la PR
Pour toute question ou suggestion, ouvre une issue ou contacte-moi directement.

---

## 📄 Licence
Ce projet est sous licence MIT – voir le fichier LICENSE pour plus de détails.

Créé avec ❤ par Ethan Serpolet
