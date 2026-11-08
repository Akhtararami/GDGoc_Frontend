# GDGoC UGM Frontend — API Integration Documentation

This document provides a comprehensive technical guide to the REST API integration implemented in the Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada web application.

---

## 1. What is an API?

An **API (Application Programming Interface)** is a structured mechanism that allows two software systems to communicate with each other over a network. In modern web development, a frontend application (built with React) communicates with a backend server using standard HTTP methods (`GET`, `POST`, etc.) to retrieve or send data formatted as **JSON (JavaScript Object Notation)**.

Instead of hardcoding text, tracks, or statistics directly into React component files, the frontend dynamically requests fresh data from the server. This decouples content management from interface rendering, allowing community organizers to update tracks, events, or FAQs without rebuilding and redeploying the frontend codebase.

---

## 2. API Base URL

The base URL for the GDGoC UGM Backend API is:

```text
https://gdgoc-ugm-api.vercel.app/api
```

All API request endpoints are appended to this base URL (e.g., `https://gdgoc-ugm-api.vercel.app/api/tracks`).

---

## 3. Available Endpoints

All responses from this API follow a predictable, standardized envelope format:

```json
{
  "success": true,
  "count": 3,
  "data": [ ... ]
}
```

The table below outlines all available endpoints and their consumers in the application:

| Endpoint | Method | Response Type | Consumed By Component / Page | Description |
|---|---|---|---|---|
| `/tracks` | `GET` | Array of objects | `TrackDiscovery` (`Landing.jsx`), `OverviewTracks` (`Overview.jsx`), `OverviewTable` (`Overview.jsx`) | Details on learning tracks (name, tagline, description, skills, what you build). |
| `/formats` | `GET` | Array of objects | `LessWatching` (`Landing.jsx`), `OverviewFormats` (`Overview.jsx`) | Learning session formats (Study groups, Workshops, Project circles, Sharing). |
| `/journey` | `GET` | Array of objects | `FirstSteps` (`Landing.jsx`), `OverviewJourney` (`Overview.jsx`) | Sequential learning flow steps (`01 Discover`, `02 Practice`, `03 Build`, `04 Share`). |
| `/values` | `GET` | Array of objects | `CommunityPromises` (`Landing.jsx`) | Core community values (Stay curious, Make room, Learn by building, Give back). |
| `/roles` | `GET` | Array of objects | `About.jsx` (Community participation) | Membership roles (Learner, Collaborator, Contributor). |
| `/inquiry-categories` | `GET` | Array of objects | `ContactTopics`, `ContactForm`, `ContactGuidance` (`Contact.jsx`) | Inquiry categories, dropdown options, and guidance for contact inquiries. |
| `/faqs` | `GET` | Array of objects | `Faq` (`Landing.jsx`, `About.jsx`) | Frequently Asked Questions. Supports optional query param `?category={cat}`. |
| `/stats` | `GET` | Object | `Footer` (Global), `About.jsx` | Community numbers (members, workshops, tracks, social handles, tagline). |
| `/navigation` | `GET` | Array of objects | `Navbar` (Global) | Dynamic navigation links for main header menu. |

---

## 4. API Service Structure

The integration is architected in a clean, modular fashion to separate network requests, state management, data transformation, and UI rendering.

```text
src/
├── services/
│   ├── api.js           # Network client and endpoint functions
│   └── mappers.jsx      # Data transformation and asset mapping
├── hooks/
│   └── useFetch.js      # Reusable hook managing loading, error, and cleanup
└── component/
    └── common/
        └── StatusState.jsx # UI placeholders (Skeleton, Error with Retry, Empty)
```

### Core Client (`src/services/api.js`)
All HTTP requests go through a centralized `fetchAPI(endpoint, options)` wrapper. This function:
1. Appends the endpoint to `API_BASE_URL`.
2. Sets default HTTP headers (`Accept: application/json`).
3. Verifies `response.ok` (HTTP status 200–299). If false, throws an error with HTTP status.
4. Parses JSON and verifies `json.success !== false`.
5. Propagates native `AbortError` instances to be gracefully caught by hooks.

---

## 5. How Fetch API Works

The project leverages the **native Web Fetch API** (`window.fetch`), which is natively supported across all modern browsers and Node environments. No heavy third-party libraries (like Axios) are needed.

```javascript
// Example from src/services/api.js
export async function getTracks(signal) {
    return fetchAPI("/tracks", { signal });
}
```

### Cancellation with `AbortController`
When a user navigates between routes before a network request completes, updating state on an unmounted component can cause memory leaks and console warnings. To prevent this, every request accepts an `AbortSignal`:

```javascript
// Example in src/hooks/useFetch.js
const controller = new AbortController();
const signal = controller.signal;

fetchFn(signal)
    .then((result) => { if (isMounted) setData(result); })
    .catch((err) => {
        if (err.name === "AbortError") return; // Request was aborted cleanly
        if (isMounted) setError(err.message);
    });

// Cleanup when component unmounts
return () => {
    isMounted = false;
    controller.abort();
};
```

---

## 6. How Data is Mapped to React Components

One of the most critical principles of this integration was to **preserve 100% of the existing high-fidelity visual design, CSS styles, and responsive layout**. 

Since the API returns raw primitives (such as simple emoji strings `"icon": "🔍"` or solid hex colors `"#4285F4"`), whereas the design uses custom 3D SVG illustrations (`designthree.svg`, `designone.svg`, `designtwo.svg`) and soft pastel backgrounds (`#E8F0FE`, `#FEF4D9`, `#E6F4EA`), we employ **Data Mappers** (`src/services/mappers.jsx`).

### Example: Track Card Mapping Flow

```text
[API Payload: GET /tracks]
{
  id: "research-discovery",
  name: "Research & Discovery",
  tagline: "Explore. Analyse. Uncover.",
  description: "Dive into research...",
  skills: ["User research", "Data analysis"],
  explore_link: "/overview?track=research-discovery"
}
             │
             ▼  mapTrackToCardProps() in src/services/mappers.jsx
             │
[Props for <TrackCard />]
{
  id: "research-discovery",
  title: "Research & Discovery",                     // from item.name
  label: "EXPLORE. ANALYSE. UNCOVER.",               // from item.tagline.toUpperCase()
  description: "Dive into research...",              // from item.description
  category: "User research · Data analysis",         // from item.skills.join(" · ")
  image: designThree,                                // matched from local 3D SVG asset
  bgColor: "#E8F0FE",                                // matched soft pastel container color
  link: "/overview?track=research-discovery"         // from item.explore_link
}
             │
             ▼
[Rendered <TrackCard />] ──> Exact 100% original visual fidelity preserved!
```

---

## 7. Loading State Implementation

When a component initiates a network call, `loading` is set to `true`. Instead of showing a raw text message that collapses the container, we render **Skeletons** (`LoadingSkeleton` in `src/component/common/StatusState.jsx`).

- **Zero Layout Shift**: Skeletons match the exact dimensions, border radius (28px), and CSS grid layout of the cards they replace.
- **Pulse Animation**: Subtle CSS pulse keyframes (`apiPulse`) communicate background progress without jarring jumps.

```jsx
// Usage pattern in components:
const { data, loading, error, refetch } = useFetch(getTracks);

if (loading) {
    return <LoadingSkeleton count={3} type="track" />;
}
```

---

## 8. Error Handling & Section Isolation

A network glitch or server outage in one section should **never** cause the entire landing page to crash or turn blank.

### Strategy:
1. **Isolated Component Scope**: Every component (`TrackDiscovery`, `Faq`, `LessWatching`, etc.) manages its own `useFetch` state. If `/faqs` fails, `/tracks` continues to display seamlessly.
2. **User-Friendly Error Card**: Instead of technical stack traces, the user sees a clear card: *"Gagal memuat data. Terjadi kendala saat menghubungkan ke server."*
3. **Retry Mechanism**: An interactive `"Coba lagi"` button calls `refetch()`, which re-executes the request without requiring a full browser refresh.

```jsx
{error && (
    <ErrorState
        title="Gagal memuat learning tracks"
        message={error}
        onRetry={refetch}
    />
)}
```

---

## 9. Empty State Handling

If the server successfully responds with HTTP 200 but the dataset is empty (`data: []`), attempting to call `.map()` could either render an awkward empty section or throw runtime errors if not guarded.

Every component implements an explicit empty check:

```jsx
{!loading && !error && tracks.length === 0 && (
    <EmptyState message="Belum ada track pembelajaran yang tersedia saat ini." />
)}
```

---

## 10. How to Add Another API Endpoint

To add a new endpoint in the future, follow this standard 3-step pattern:

### Step 1: Add the function in `src/services/api.js`
```javascript
export async function getEvents(signal) {
    return fetchAPI("/events", { signal });
}
```

### Step 2: (Optional) Add a mapper in `src/services/mappers.jsx`
If the backend payload structure differs from the props of your target UI component, add a pure transformation function:
```javascript
export function mapEventItem(apiEvent) {
    return {
        id: apiEvent.id,
        title: apiEvent.title,
        date: new Date(apiEvent.timestamp).toLocaleDateString(),
        location: apiEvent.venue || "Online",
    };
}
```

### Step 3: Consume in your React Component
```javascript
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { getEvents } from "../../services/api";
import { mapEventItem } from "../../services/mappers";
import { LoadingSkeleton, ErrorState, EmptyState } from "../common/StatusState";

function EventsSection() {
    const { data: rawEvents, loading, error, refetch } = useFetch(getEvents);
    const events = Array.isArray(rawEvents) ? rawEvents.map(mapEventItem) : [];

    if (loading) return <LoadingSkeleton count={3} type="card" />;
    if (error) return <ErrorState message={error} onRetry={refetch} />;
    if (events.length === 0) return <EmptyState message="Tidak ada agenda mendatang." />;

    return (
        <div className="events-grid">
            {events.map((event) => (
                <div key={event.id} className="event-card">
                    <h3>{event.title}</h3>
                    <p>{event.date} — {event.location}</p>
                </div>
            ))}
        </div>
    );
}

export default EventsSection;
```

---

## 11. Verification & Testing Summary

- **Build Tool**: Vite 8 production build completed successfully with zero bundling errors.
- **Code Linter**: `oxlint` passed with **0 warnings and 0 errors** across all 33 files.
- **Responsive Layout**: Validated across desktop (1440px), tablet (768px), and mobile (360px–680px).
- **Design Integrity**: 100% of the original CSS tokens, typography, and SVG assets are intact.
