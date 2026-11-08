# GDGoC UGM – Frontend Development

A responsive web application developed as part of the Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada Front-End Development assignment.

This project provides information about GDGoC UGM, its learning programs, available tracks, and contact information through an interactive and responsive user interface.

## Live Demo

**Website:** [Live Deployment](https://akhtararamimuhammadaji-gdgoc.vercel.app/)

**GitHub Repository:** [Github Repository](https://github.com/Akhtararami/GDGoc_Frontend.git)

**Video Presentation:** [Video Presentation](https://drive.google.com/file/d/1_Q_hl4aB6IITXThc3T1EsIwh5e762SrQ/view?usp=sharing)

## Tech Stack

The project is built using the following technologies:

- **React** – JavaScript library for building user interfaces.
- **Vite** – Frontend build tool and development server.
- **React Router DOM** – Client-side routing and navigation.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **CSS3** – Custom styling and reusable component designs.
- **JavaScript (ES6+)** – Main programming language.
- **Fetch API** – Communicating with the backend API.

## Features

- **Landing Page** – Introduces GDGoC UGM and provides information about the community and its programs.
- **Overview Page** – Displays available learning tracks and related information retrieved from the API.
- **Contact Page** – Provides contact information for users who want to connect with GDGoC UGM.
- **Interactive FAQ** – Allows users to expand and collapse frequently asked questions.
- **API Integration** – Retrieves and displays dynamic data from the provided API.
- **Loading State** – Displays loading skeletons while waiting for API responses.
- **Error State** – Provides error messages and a retry mechanism when API requests fail.
- **Empty State** – Displays appropriate information when the API returns no available data.
- **Responsive Design** – Adapts the interface to desktop and mobile screen sizes.

## Project Structure

The project follows a modular component-based architecture to keep the source code organized, reusable, and maintainable.

```text
GDGOC_Repository/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   └── Reusable UI components
│   │
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Overview.jsx
│   │   └── Contact.jsx
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

**Note:** The structure above illustrates the main project organization. Some component and asset files are omitted for readability.

### Architecture Overview

- **Components:** Contains reusable UI elements such as navigation, footer, FAQ, and other interface components.
- **Pages:** Contains the main application pages: Landing, Overview, and Contact.
- **Hooks:** Contains custom React hooks, including `useFetch.js`, for managing API requests and application states.
- **Services:** Handles API communication and request functions.
- **Assets:** Stores images, icons, and other static resources.

## API Integration

The application integrates with the provided GDGoC UGM API to retrieve dynamic information.

**API Base URL:**

```text
https://gdgoc-ugm-api.vercel.app/api
```

The API requests are organized in the services directory, while the custom `useFetch` hook manages the fetching process and application states.

The application handles three main API states:

1. **Loading:** Displays skeleton placeholders while data is being fetched.
2. **Error:** Displays an error message and allows users to retry the request.
3. **Empty:** Displays an appropriate message when no data is available.

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Akhtararami/GDGoc_Frontend.git
```

### 2. Navigate to the Project Directory

```bash
cd GDGoc_Frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser, usually:

```text
http://localhost:5173
```

### 5. Build for Production

To create an optimized production build, run:

```bash
npm run build
```

The generated production files will be available in the `dist/` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

## Deployment

This application is deployed using **Vercel** and is publicly accessible.

**Live Application:** [Live Deployment](https://akhtararamimuhammadaji-gdgoc.vercel.app/)

The project is connected to the GitHub repository for source code management and deployment updates.

## Video Presentation

A 3–5 minute video presentation covering the following topics:

- Project overview and introduction.
- Technologies and project architecture.
- API integration and state management.
- Website demonstration.
- Loading, Error, and Empty State implementation.
- Live deployment.

**Watch the Presentation:**[Video Presentation](https://drive.google.com/file/d/1_Q_hl4aB6IITXThc3T1EsIwh5e762SrQ/view?usp=sharing)

## Author

**Akhtar Arami Muhammad Aji**

Front-End Development Assignment  
Google Developer Groups on Campus – Universitas Gadjah Mada

GitHub: [@Akhtararami](https://github.com/Akhtararami)

---

_Developed as part of the GDGoC UGM Front-End Development assignment._
