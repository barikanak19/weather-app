import React from 'react';

/* ─── shared helpers ─────────────────────────────────── */
const iconBase = { width: 96, height: 96, viewBox: '0 0 96 96', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };

/* ─── ☀️  Clear / Sunny ─────────────────────────────── */
export const SunnyIcon = () => (
  <svg {...iconBase}>
    <style>{`
      @keyframes spin { to { transform: rotate(360deg); } }
      .sun-rays { transform-origin: 48px 48px; animation: spin 18s linear infinite; }
    `}</style>
    <g className="sun-rays">
      {[0,45,90,135,180,225,270,315].map(a => (
        <line key={a} x1="48" y1="6" x2="48" y2="18"
              stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"
              style={{ transformOrigin:'48px 48px', transform:`rotate(${a}deg)` }} />
      ))}
    </g>
    <circle cx="48" cy="48" r="18" fill="#FBBF24" />
    <circle cx="48" cy="48" r="12" fill="#FDE047" />
  </svg>
);

/* ─── ☁️  Cloudy ─────────────────────────────────────── */
export const CloudyIcon = () => (
  <svg {...iconBase}>
    <style>{`
      @keyframes drift { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
      .cloud-body { animation: drift 3s ease-in-out infinite; }
    `}</style>
    <g className="cloud-body">
      <circle cx="38" cy="46" r="16" fill="#cbd5e1" />
      <circle cx="55" cy="40" r="20" fill="#e2e8f0" />
      <circle cx="70" cy="47" r="13" fill="#cbd5e1" />
      <rect x="24" y="46" width="58" height="16" fill="#cbd5e1" rx="8" />
    </g>
  </svg>
);

/* ─── 🌧️  Rain ───────────────────────────────────────── */
export const RainIcon = () => (
  <svg {...iconBase}>
    <style>{`
      @keyframes fall { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(22px);opacity:0} }
      .drop-1 { animation: fall .7s linear 0s   infinite; }
      .drop-2 { animation: fall .7s linear .2s  infinite; }
      .drop-3 { animation: fall .7s linear .4s  infinite; }
      .drop-4 { animation: fall .7s linear .1s  infinite; }
      .drop-5 { animation: fall .7s linear .3s  infinite; }
    `}</style>
    {/* cloud */}
    <circle cx="36" cy="34" r="14" fill="#94a3b8" />
    <circle cx="50" cy="28" r="18" fill="#cbd5e1" />
    <circle cx="64" cy="35" r="12" fill="#94a3b8" />
    <rect x="24" y="34" width="52" height="14" fill="#94a3b8" rx="7" />
    {/* drops */}
    <line className="drop-1" x1="34" y1="54" x2="31" y2="68" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
    <line className="drop-2" x1="48" y1="54" x2="45" y2="68" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
    <line className="drop-3" x1="62" y1="54" x2="59" y2="68" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
    <line className="drop-4" x1="41" y1="58" x2="38" y2="72" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
    <line className="drop-5" x1="55" y1="58" x2="52" y2="72" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* ─── ⛈️  Stormy ─────────────────────────────────────── */
export const StormyIcon = () => (
  <svg {...iconBase}>
    <style>{`
      @keyframes flash { 0%,100%{opacity:1} 40%{opacity:0.3} 60%{opacity:1} 70%{opacity:0.4} }
      .bolt { animation: flash .8s ease-in-out infinite; }
    `}</style>
    {/* dark cloud */}
    <circle cx="36" cy="32" r="14" fill="#64748b" />
    <circle cx="50" cy="26" r="18" fill="#475569" />
    <circle cx="64" cy="33" r="12" fill="#64748b" />
    <rect x="24" y="32" width="52" height="14" fill="#64748b" rx="7" />
    {/* lightning bolt */}
    <polygon className="bolt" points="52,48 44,62 51,62 46,78 60,60 52,60 58,48" fill="#facc15" />
  </svg>
);

/* ─── 🌨️  Snowy ──────────────────────────────────────── */
export const SnowyIcon = () => (
  <svg {...iconBase}>
    <style>{`
      @keyframes drift2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(4px)} }
      .cloud-snow { animation: drift2 3s ease-in-out infinite; }
      @keyframes flake { 0%{transform:translateY(0) rotate(0deg);opacity:1} 100%{transform:translateY(24px) rotate(180deg);opacity:0} }
      .f1{animation:flake 1.2s linear 0s   infinite;}
      .f2{animation:flake 1.2s linear .3s  infinite;}
      .f3{animation:flake 1.2s linear .6s  infinite;}
      .f4{animation:flake 1.2s linear .15s infinite;}
      .f5{animation:flake 1.2s linear .45s infinite;}
    `}</style>
    <g className="cloud-snow">
      <circle cx="36" cy="34" r="14" fill="#e2e8f0" />
      <circle cx="50" cy="28" r="18" fill="#f1f5f9" />
      <circle cx="64" cy="35" r="12" fill="#e2e8f0" />
      <rect x="24" y="34" width="52" height="14" fill="#e2e8f0" rx="7" />
    </g>
    <text className="f1" x="32" y="56" fontSize="10" fill="#bfdbfe" textAnchor="middle">❄</text>
    <text className="f2" x="48" y="52" fontSize="10" fill="#93c5fd" textAnchor="middle">❄</text>
    <text className="f3" x="64" y="56" fontSize="10" fill="#bfdbfe" textAnchor="middle">❄</text>
    <text className="f4" x="40" y="60" fontSize="9"  fill="#93c5fd" textAnchor="middle">❄</text>
    <text className="f5" x="56" y="60" fontSize="9"  fill="#bfdbfe" textAnchor="middle">❄</text>
  </svg>
);

/* ─── 🌤️  Default (sun behind cloud) ────────────────── */
export const DefaultIcon = () => (
  <svg {...iconBase}>
    <circle cx="34" cy="38" r="14" fill="#fbbf24" />
    <circle cx="42" cy="42" r="16" fill="#cbd5e1" />
    <circle cx="56" cy="37" r="20" fill="#e2e8f0" />
    <circle cx="70" cy="43" r="13" fill="#cbd5e1" />
    <rect x="30" y="42" width="52" height="16" fill="#cbd5e1" rx="8" />
  </svg>
);

/* ─── resolver: OpenWeatherMap condition → component ─── */
const map = {
  'clear sky':            SunnyIcon,
  'few clouds':           DefaultIcon,
  'scattered clouds':     CloudyIcon,
  'broken clouds':        CloudyIcon,
  'overcast clouds':      CloudyIcon,
  'light rain':           RainIcon,
  'moderate rain':        RainIcon,
  'heavy intensity rain': RainIcon,
  'very heavy rain':      RainIcon,
  'extreme rain':         RainIcon,
  'freezing rain':        RainIcon,
  'light intensity drizzle': RainIcon,
  'drizzle':              RainIcon,
  'intensity drizzle':    RainIcon,
  'thunderstorm':         StormyIcon,
  'thunderstorm with light rain':  StormyIcon,
  'thunderstorm with rain':        StormyIcon,
  'thunderstorm with heavy rain':  StormyIcon,
  'light thunderstorm':            StormyIcon,
  'heavy thunderstorm':            StormyIcon,
  'ragged thunderstorm':           StormyIcon,
  'thunderstorm with light drizzle': StormyIcon,
  'thunderstorm with drizzle':       StormyIcon,
  'thunderstorm with heavy drizzle': StormyIcon,
  'light snow':           SnowyIcon,
  'snow':                 SnowyIcon,
  'heavy snow':           SnowyIcon,
  'sleet':                SnowyIcon,
  'shower sleet':         SnowyIcon,
  'light shower sleet':   SnowyIcon,
  'shower snow':          SnowyIcon,
  'light shower snow':    SnowyIcon,
  'heavy shower snow':    SnowyIcon,
  'mist':                 CloudyIcon,
  'smoke':                CloudyIcon,
  'haze':                 CloudyIcon,
  'fog':                  CloudyIcon,
  'sand':                 CloudyIcon,
  'dust':                 CloudyIcon,
  'ash':                  CloudyIcon,
  'squalls':              StormyIcon,
  'tornado':              StormyIcon,
};

export function getWeatherIcon(description = '') {
  const key = description.toLowerCase().trim();
  const Icon = map[key] || DefaultIcon;
  return <Icon />;
}