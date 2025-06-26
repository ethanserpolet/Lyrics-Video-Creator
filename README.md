# 🇫🇷 French Version (For English Check Below)

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
- **Enhanced LRC** Afin de prendre en compte la synchronisation des paroles mots par mots au lieu de ligne par ligne
- **Documentation interactive** (Storybook, Docsify…)  
- **Plugin OBS** pour streamer directement la lyric video en live
- **End Screen** Ajout de ___endScreen/outro___ et de ___startScreen/intro___ personalisés

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

Créé avec ❤ par [Ethan Serpolet](https://ethan.serpolet.fun)

---

# 🇺🇸 🇬🇧 English Version

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
**Lyric Video Creator** is a web application that allows you to easily generate lyric videos from image, audio, and LRC files.

---

## 📝 Description

This project provides a sleek and modern interface (with Tailwind CSS and a "frosted glass effect") for importing: 
- An image (e.g., album cover) 
- An audio file (MP3, WAV, etc.) 
- A lyrics file in LRC format

What is an LRC file??? What is an LRC file???

LRC (short for lyrics) is a computer file format that synchronizes song lyrics with an audio file, such as MP3, AAC, or MIDI. It allows for compatible media player software (including digital audio players) to display song lyrics synchronously with a playing song. The lyrics file has the same name as the audio file, just with a different filename extension, and operates as a sidecar file. For example, if a song's main file is song.mp3, its LRC file would most be song.lrc. The LRC format is text-based and similar in form to subtitle files. It can be manually created and written in a text editor but purpose-made software has been made to ease and automate the creation of lyrics files. Various websites operate providing ready-made LRC files for songs to be downloaded. There also exist software that mass-download LRC files from song lyrics databases, automating the process to the user.

Example:
```
It seems like you haven't provided any text to translate. Please provide the text you want to be translated, and I'll be happy to help! 
[ti:Princess of the Dawn] 
[ar:Accept] 
[al:Restless and Wild] 
[by: Christophe Dang Ngoc Chan]

[00:15] Hay lluvia en la montaña.
````

We can find them freely, notably on Musixmatch, and retrieve them for free with this [MxLRC](https://github.com/fashni/MxLRC). 
Or make them yourself easily and quickly with [LRCCreator](https://www.lrcgenerator.com/), [LRCMaker](https://lrc-maker.github.io/), or [LyricPotato](https://lyricpotato.com/)

And then to configure your Lyrics Video to your liking

---

## 🎬 Preview

![Screenshot of the application] (assets/screenshot.png)

*Preview Video 1* 
[![Preview 1](https://img.youtube.com/vi/aR_-BlYj1gM/0.jpg)] (https://www.youtube.com/watch?v=aR_-BlYj1gM)

---

## ⚙️ Features

- 📁 Batch import of image/audio/LRC 
- 🎞️ Real-time preview 
- 🌈 Advanced controls (blur, transitions, particles, rhythm sync…) 
- 🖋️ Font and text color editable 
- 📐 Choice of format, resolution, bitrate, and framerate 
- 🚀 Export video including the audio track

---

## 🚀 Installation

1. **Clone the repository** 
It seems like you haven't provided any text to translate. Please provide the text you want to be translated, and I'll be happy to help! 
git clone https://github.com/ethanserpolet/Lyrics-Video-Creator.git 
cd Lyrics-Video-Creator 
It seems there is no text provided for translation. Could you please provide the text you want to be translated? 
2. **Open index.html directly (no server dependency required)**

---

## 🎛️ Use

1. Click on **“Choose files”** and select a folder containing: 
 - An image (`.png`, `.jpg`, `.webp`) 
 - An audio file (`.mp3`, `.wav`, …) 
 - A lyrics file (`.lrc`)

2. Adjust the settings (format, transitions, effects, etc.) 
3. Press **“Export Video”** to generate and download your lyric video.

---

## 🛠️ Development

- The project is in **vanilla JS**, without a build step. 
- The styles are managed by **Tailwind CSS** and a bit of custom CSS. 
- To customize Tailwind or add a build workflow (PostCSS, Webpack…), simply add the corresponding configuration. To customize Tailwind or add a build workflow (PostCSS, Webpack…), simply add the corresponding configuration.

---

## 🎯 Goals & TODO

- **Improve the visual rendering** 
 - Refine the transitions (fluidity, timing) 
- Improve the integration of effects (blur, particles, sync rhythm)

- **Port the project in Python (or another language) + backend** 
- Manage the upload and rendering on the server 
 - Allow for a cleaner and more controlled server-side rendering

- **Optimize performance** 
 - Reduce memory and CPU impact during export 
- Load resources (image, LRC) asynchronously

- **Fix known bugs** 
 - Timing issues on certain browsers 
- Handling poorly formed LRC files 
- Behavior of the "Export" button after multiple exports

- **Add advanced customization settings** 
 - Letter-by-letter animation (type "typewriter") 
 - New text effect options (mask, scrolling, wave) 
 - Offset and fine metronome for synchronization

---

### ✨ Additional Ideas

- **Export animated GIF & WebP** 
- **Batch mode** to process multiple files in a single command 
- **Mobile-responsive interface** and PWA (Progressive Web App) 
- **Light/Dark themes** and localization (FR / EN / ES…) 
- **REST API** to automate rendering from other services 
- **Enhanced LRC** In order to take into account the synchronization of lyrics word by word instead of line by line 
- **Interactive documentation** (Storybook, Docsify…) 
- **OBS Plugin** to stream the lyric video live 
- **End Screen** Addition of customized ___endScreen/outro___ and ___startScreen/intro___

---

## 🤝 Contribute

Contributions are welcome! 
1. **Fork** this repository 
2. **Create** a branch 
Please provide the text you would like to have translated. 
git checkout -b feat/my-feature 
Please provide the text you would like me to translate. 
3. **Commit** with clear messages 
 It seems like you haven't provided any text to translate. Please provide the text you want to be translated. 
git commit -m "Add control XYZ" 
It seems that there is no text provided to translate. Could you please provide the text you would like to have translated? 
4. Open a Pull Request here

Thank you for respecting these few rules: 
No generated files (build, bundles) in the repository 
Consistent code style (indentation, quotes…) Update/add tests if necessary

---

## 📄 Licence
This project is under MIT License – Check the LICENSE file for more details

Made with ❤ by [Ethan Serpolet](https://ethan.serpolet.fun)
