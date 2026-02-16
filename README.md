https://weather-app-createdbykanak.vercel.app/
# 🌤️ Weather App — Vite + React

A clean, minimal weather app that fetches live data from **OpenWeatherMap**.

---

## 📂 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── main.jsx          ← React entry point
│   ├── index.css         ← Global resets + font import
│   ├── App.jsx           ← Main component (search + API + card)
│   ├── App.css           ← All component styles
│   └── weatherIcons.jsx  ← Animated SVG icons + condition resolver
├── index.html
├── package.json
├── vite.config.js
└── README.md             ← this file
```

---

## 🚀 Getting Started

### Step 1 — Get a FREE API key

1. Go to **https://openweathermap.org/api**
2. Sign up (free, no credit-card needed).
3. Copy your API key from the dashboard.

### Step 2 — Paste the key into the app

Open `src/App.jsx` and replace the placeholder on **line 12**:

```js
const API_KEY = 'YOUR_API_KEY';   // ← paste your key here
```

> ⚡ New keys can take up to **2 hours** to activate on OpenWeatherMap's servers.

### Step 3 — Install dependencies

```bash
cd weather-app
npm install
```

### Step 4 — Run the dev server

```bash
npm run dev
```

The app will start at **http://localhost:5173** (default Vite port).

---

## ✨ Features

| Feature | Details |
|---|---|
| Live weather | OpenWeatherMap Current-Weather API |
| Details shown | City, Temperature (°C), Condition, Humidity, Wind Speed |
| Animated icons | Pure-CSS SVG icons (sun spin, rain fall, snow drift, lightning flash) |
| Loading state | Spinner while API request is in-flight |
| Error handling | City-not-found & invalid-key messages |
| Responsive | Works on mobile (≤ 480 px) and desktop |
| Enter key | Press **Enter** to trigger search |

---

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite 6** — blazing-fast dev server + bundler
- **Axios** — HTTP client
- **Nunito Sans** (Google Fonts) — typography

---

*Build by – Kanak Bari*
