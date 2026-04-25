# 🧠 Memory Game

Ein interaktives Memory-Spiel mit Fokus auf sauberer Architektur, moderner Toolchain und flexiblem Theme-System.

## 🛠️ Projekt in VS Code einrichten

Dieses Projekt wurde mit **Vite**, **TypeScript** und **SCSS** erstellt.
Folge diesen Schritten, um das Projekt lokal einzurichten und zu starten.

---

### ✅ 1. Voraussetzungen

Stelle sicher, dass folgende Programme installiert sind:

* Node.js (min v.20)
* npm (wird mit Node.js installiert)
* Visual Studio Code

---

### 📥 2. Repository klonen

```bash id="klf82a"
git clone https://github.com/XbatzoX/memory.git
```

---

### 📦 3. Abhängigkeiten installieren

```bash id="p3m91x"
npm init -y       // package.json erzeugen
npm install -D vite typescript
tsc --init       //tsconfig erstellen

```

---

### 🚀 4. Entwicklungsserver starten

```bash id="q7z4nb"
npm run dev
```

Nach dem Start zeigt Vite eine lokale URL an, meistens:

```
http://localhost:5173/
```

Diese im Browser öffnen.

---

### 🏗️ 5. Produktions-Build erstellen

```bash id="m82kqz"
npm run build
```

Die optimierten Dateien werden im Ordner `/dist` erstellt.

---

## 🚀 Features

* 🎮 Klassisches Memory-Gameplay
* 🎨 Mehrere Themes (z. B. Food & Code)
* ⚡ Schnelle Entwicklungsumgebung mit Vite
* 🧠 Strukturierter Code mit TypeScript
* 🎯 Sauberes Styling mit SCSS (7–1 Pattern + BEM)
* 🔄 Dynamische Karten-Generierung & Shuffle-Logik
* 💡 Sauberes State-Management für Game-Logik

---

## 🛠️ Tech Stack

* ⚡ **Vite** – schneller Dev-Server & Build-Tool
* 🧠 **TypeScript** – typsichere Logik
* 🎨 **SCSS** – strukturierte Styles (7–1 Pattern)
* 🧩 **BEM Methodologie** – wartbare CSS-Architektur

---

## 🎨 Themes

Das Spiel unterstützt mehrere visuelle Themes:

* 🍔 Food Theme
* 💻 Code Theme

Die Themes werden über eine Wrapper-Klasse gesteuert:

```html
<body class="theme-food">
```

oder

```html
<body class="theme-code">
```

---

## 📁 Projektstruktur

```plaintext
src/
│
├── assets/        # Bilder & Icons
├── styles/
│   ├── base/
│   ├── components/
│   │   ├── _button.scss
│   │   ├── _dialog.scss
│   ├── layout/
│   ├── pages/
│   ├── themes/
│   │   └── _themes.scss
│   └── main.scss
│
├── ts/
│   ├── logic/
│   ├── models/
│   ├── ui/
│   └── main.ts
```
---

## 🧠 Spiel-Logik (Kurz erklärt)

* Karten werden paarweise generiert
* Board wird zufällig gemischt (Fisher-Yates Shuffle)
* Klick-Handling mit sauberem Event-System
* Match-Check über eindeutige Karten-ID
* State wird zentral verwaltet

---

## 🎯 Lernziele des Projekts

Dieses Projekt wurde erstellt, um:

* TypeScript in der Praxis anzuwenden
* saubere CSS-Architektur mit SCSS umzusetzen
* UI-Komponenten strukturiert zu entwickeln
* Event-Handling & Game-Logic zu verstehen

