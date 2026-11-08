# GDGoC UGM — Frontend

Website frontend untuk **Google Developer Groups on Campus, Universitas Gadjah Mada**.
Dibangun dengan React (JSX) + Vite + React Router.

## Menjalankan project

```bash
npm install
npm run dev       # development server (http://localhost:5173)
npm run build     # production build ke folder dist/
npm run preview   # preview hasil build
npm run lint      # oxlint
```

## Struktur

```text
src/
├── assets/                      # SVG (logo, hero, track, marker, arrow, star)
├── component/
│   ├── navbar.jsx / navbar.css
│   ├── footer.jsx / footer.css
│   ├── title.jsx                # judul section reusable (label + title + deskripsi)
│   └── LandingPages/
│       ├── dashboard.jsx        # hero
│       ├── communityPromises.jsx
│       ├── communityIntroduction.jsx
│       ├── trackdiscovery.jsx + Trackcard.jsx
│       ├── lessWatching.jsx + learningCard.jsx
│       ├── projectShowcase.jsx
│       ├── firstSteps.jsx
│       ├── inclusiveBanner.jsx
│       ├── faq.jsx
│       └── ctaBanner.jsx
├── pages/                       # Landing, About, Contact
├── App.jsx / App.css            # routing + styling landing page
└── index.css
```

## Catatan

- Font: Google Sans Flex (dimuat dari Google Fonts lewat `@import`, butuh koneksi internet).
- Halaman `About` dan `Contact` masih placeholder.
- Referensi desain: `Landing - GDGoC UGM.png` (1440px). Breakpoint responsive: 1100px, 768px, 640px, 480px.
