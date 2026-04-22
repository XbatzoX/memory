# 🧠 Memory Game

Ein interaktives Memory-Spiel mit Fokus auf sauberer Architektur, moderner Toolchain und flexiblem Theme-System.

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

