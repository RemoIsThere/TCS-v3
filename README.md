# TechCity Skills v2

A modern, responsive EdTech landing site for **TechCity Skills Pvt. Ltd.** — built with React, Vite, and Tailwind CSS. Features smooth scroll animations (Lenis), Framer Motion transitions, an interactive Leaflet map, and a dynamic training gallery.

---

## Tech Stack

| Layer       | Technology                                      |
|-------------|--------------------------------------------------|
| Framework   | React 18 (JSX)                                   |
| Bundler     | Vite                                             |
| Styling     | Tailwind CSS v3 + PostCSS                        |
| Animation   | Framer Motion                                    |
| Smooth Scroll | Lenis                                          |
| Map         | Leaflet (react-leaflet)                          |
| Icons       | Lucide React                                     |
| Form Submit | FormSubmit (no-backend contact form)             |
| Font        | Outfit (Google Fonts)                            |

---

## Project Structure

```
Techcity skills v2/
│
├── public/                         # Static assets (served at /)
│   ├── logo.png                    # Brand logo (used in Navbar & Hero)
│   ├── Deepak.jpeg                 # Director photo — Deepak Tripathi
│   ├── Gunjan.jpeg                 # Director photo — Gunjan Soam
│   ├── training/                   # Original training images (legacy)
│   │   ├── 1.jpeg
│   │   ├── 2.jpeg
│   │   ├── 3.jpeg
│   │   ├── 4.jpeg
│   │   ├── 5.jpeg
│   │   └── 6.jpeg
│   └── gallery/                    # ★ Training Gallery images
│       ├── 1.jpeg                  # Add new photos here for the gallery page
│       ├── 2.jpeg                  # Any image dropped here will be picked up
│       ├── 3.jpeg                  # after updating GALLERY_IMAGES in
│       ├── 4.jpeg                  # src/pages/TrainingGallery.jsx
│       ├── 5.jpeg
│       └── 6.jpeg
│
├── src/
│   ├── main.jsx                    # App entry point (ReactDOM.createRoot)
│   ├── App.jsx                     # Root component: routing, Lenis, layout
│   ├── index.css                   # Global CSS (Tailwind directives, custom styles)
│   │
│   ├── pages/                      # Full-page route components
│   │   ├── Home.jsx                # Landing page — assembles all sections
│   │   ├── About.jsx               # About page — directors, pillars, milestones
│   │   ├── Projects.jsx            # Interactive Leaflet map + project directory
│   │   ├── TrainingGallery.jsx     # ★ Training gallery — masonry grid + lightbox
│   │   ├── Requirements.jsx        # "Coming Soon" requirements placeholder
│   │   ├── Privacy.jsx             # Privacy Policy
│   │   └── Terms.jsx               # Terms & Conditions
│   │
│   └── components/                 # Reusable UI sections (used in Home.jsx)
│       ├── Navbar.jsx              # Responsive navbar with mobile drawer
│       ├── Hero.jsx                # Hero section — logo visual + CTA buttons
│       ├── Stats.jsx               # Animated count-up stats strip
│       ├── Features.jsx            # 3-column "Why TechCity?" features grid
│       ├── Courses.jsx             # Tabbed featured courses/programs section
│       ├── Gallery.jsx             # Training photo marquee + "Visit Gallery" CTA
│       ├── ProjectsPreview.jsx     # Ongoing projects teaser grid
│       ├── Testimonials.jsx        # Auto-scrolling testimonials marquee
│       ├── CTA.jsx                 # Contact form (FormSubmit integration)
│       └── Footer.jsx              # Footer with links and contact info
│
├── Training pictures/              # Raw/source images (not served by Vite)
│   └── 1–6.jpeg
│
├── index.html                      # Vite HTML entry
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind theme (colors: gold, surface, etc.)
├── postcss.config.js               # PostCSS config
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

---

## Routes

| Path               | Component          | Description                              |
|--------------------|--------------------|------------------------------------------|
| `/`                | `Home`             | Main landing page                        |
| `/about`           | `About`            | Directors, pillars, milestones           |
| `/projects`        | `Projects`         | Interactive India map + project list     |
| `/ongoing-projects`| `Projects`         | Alias for `/projects`                    |
| `/gallery`         | `TrainingGallery`  | Full training photo gallery              |
| `/requirements`    | `Requirements`     | Project requirements (coming soon)       |
| `/privacy`         | `Privacy`          | Privacy Policy                           |
| `/terms`           | `Terms`            | Terms & Conditions                       |

---

## Home Page Sections (in order)

1. **Hero** — Brand headline, "Explore Programs" + "Watch Demo" CTAs, logo visual with ambient glow
2. **Stats** — Animated count-up: learners, placement rate, mentors, rating
3. **Features** — 3 cards: Live Projects, 1:1 Mentorship, Certificates
4. **Courses** — Tabbed program cards: MERN, Data Science, GenAI
5. **Gallery** — Auto-scrolling marquee of training photos + **Visit Gallery** button → `/gallery`
6. **ProjectsPreview** — Highlight cards for 4 active hubs + link to full map
7. **Testimonials** — Auto-scrolling alumni quotes marquee
8. **CTA** — Contact form (email + message, FormSubmit)

---

## Training Gallery

The gallery page (`/gallery`) is designed to grow automatically:

1. Drop new image files into **`public/gallery/`**
2. Open `src/pages/TrainingGallery.jsx`
3. Add an entry to the `GALLERY_IMAGES` array at the top:
   ```js
   { src: '/gallery/7.jpeg', title: 'Your Title', category: 'Category Name' }
   ```
4. The masonry grid, filter pills, and lightbox will all update automatically.

**Features:**
- Masonry grid layout (1 → 2 → 3 → 4 columns at breakpoints)
- Category filter pills (auto-generated from image data)
- Lightbox with prev/next navigation and keyboard support (← → Esc)
- Animated transitions (Framer Motion)
- Lazy-loaded images

---

## Tailwind Theme (tailwind.config.js)

```js
colors: {
  background: '#050505',
  surface:    '#111111',
  gold: {
    DEFAULT: '#D4AF37',
    light:   '#F5D061',
    dark:    '#AA8825',
  },
  text: {
    primary:   '#FFFFFF',
    secondary: '#A3A3A3',
  }
},
fontFamily: {
  outfit: ['Outfit', 'sans-serif'],
}
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Adding Content

### New Training Photos
1. Place image files in `public/gallery/`
2. Register them in `src/pages/TrainingGallery.jsx` → `GALLERY_IMAGES` array

### New Navigation Links
Edit `src/components/Navbar.jsx` — desktop links and the mobile drawer both need updating.

### New Routes
1. Create a page component in `src/pages/`
2. Add `<Route path="..." element={<YourPage />} />` in `src/App.jsx`
3. Import the component at the top of `App.jsx`

### Contact Form
The contact form in `CTA.jsx` uses [FormSubmit](https://formsubmit.co/). Update the email address in the `fetch` URL to your own:
```js
await fetch("https://formsubmit.co/ajax/your@email.com", { ... })
```

---

## Director Photos

Place photos in the `public/` folder and update the `image` paths in `src/pages/About.jsx`:

```js
image: '/Deepak.jpeg',   // → public/Deepak.jpeg
image: '/Gunjan.jpeg',   // → public/Gunjan.jpeg
```

If an image fails to load, the component gracefully falls back to an initials avatar.

---

## License

© 2026 TechCity Skills Pvt. Ltd. All rights reserved.
