import { useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import { getWeatherIcon } from './weatherIcons';

/* ─────────────────────────────────────────────────────────────
   OpenWeatherMap FREE-tier key
   → Replace YOUR_API_KEY below with your own key from
     https://openweathermap.org/api  (no credit card needed)
   ───────────────────────────────────────────────────────────── */
const API_KEY = 'f91e2e671c7a0b3ae29ef012cb38a1eb';           // ← paste here
const BASE   = 'https://openweathermap.org/';

export default function App() {
  /* ── state ── */
  const [input,       setInput]       = useState('');
  const [weather,     setWeather]     = useState(null);   // parsed result
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState('');

  /* ── fetch handler ── */
  const fetchWeather = useCallback(async () => {
    const city = input.trim();
    if (!city) return;                            // empty guard

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const { data } = await axios.get(BASE, {
        params: {
          q:     city,
          appid: API_KEY,
          units: 'metric',   // Celsius
        },
      });

      /* normalise → what the card needs */
      setWeather({
        city:        data.name,
        country:     data.sys.country,
        temp:        Math.round(data.main.temp),
        condition:   data.weather[0].description,   // e.g. "light rain"
        humidity:    data.main.humidity,             // %
        windSpeed:   data.wind.speed,                // m/s
      });
    } catch (err) {
      /* 404 = city not found; anything else = generic */
      if (err.response && err.response.status === 404) {
        setError('City not found. Please check the spelling and try again.');
      } else if (err.response && err.response.status === 401) {
        setError('Invalid API key. Please update YOUR_API_KEY in App.jsx.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  }, [input]);

  /* ── Enter-key shortcut ── */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  /* ──────────── RENDER ──────────── */
  return (
    <div className="app-wrapper">

      {/* ── Title ── */}
      <h1 className="app-title"><span>Weather</span> App</h1>

      {/* ── Search ── */}
      <section className="search-section">
        <div className="search-row">
          <input
            className="search-input"
            type="text"
            placeholder="Enter city name…"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(''); }}
            onKeyDown={handleKeyDown}
            aria-label="City name"
          />
          <button
            className="search-btn"
            onClick={fetchWeather}
            disabled={loading || !input.trim()}
          >
            Search
          </button>
        </div>

        {/* error toast */}
        {error && <p className="error-msg" role="alert">{error}</p>}
      </section>

      {/* ── Loading ── */}
      {loading && (
        <div className="loading-box">
          <div className="spinner" />
          <p>Fetching weather…</p>
        </div>
      )}

      {/* ── Weather Card ── */}
      {!loading && weather && (
        <div className="weather-card">

          {/* animated SVG icon */}
          <div className="card-icon-row">
            {getWeatherIcon(weather.condition)}
          </div>

          {/* city */}
          <h2 className="card-city">
            {weather.city}, {weather.country}
          </h2>

          {/* temperature */}
          <p className="card-temp">
            {weather.temp}<sup>°C</sup>
          </p>

          {/* condition text */}
          <p className="card-condition">{weather.condition}</p>

          <div className="card-divider" />

          {/* stats 2×2 */}
          <div className="stats-grid">

            <div className="stat-item">
              <span className="stat-emoji">💧</span>
              <div>
                <div className="stat-label">Humidity</div>
                <div className="stat-value">{weather.humidity} %</div>
              </div>
            </div>

            <div className="stat-item">
              <span className="stat-emoji">💨</span>
              <div>
                <div className="stat-label">Wind Speed</div>
                <div className="stat-value">{weather.windSpeed} m/s</div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ══════════ FOOTER ══════════ */}
      <footer className="footer">
        <p>Build by – <span className="author">Kanak Bari</span></p>
      </footer>
    </div>
  );
}
