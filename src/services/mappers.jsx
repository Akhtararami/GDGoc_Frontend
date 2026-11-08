/**
 * Data Mappers - GDGoC UGM Frontend
 * 
 * Modul ini bertugas mengubah (mapping) struktur data mentah dari API
 * ke format properti (props) yang dibutuhkan oleh komponen UI yang sudah ada.
 * 
 * Dengan pendekatan ini, komponen UI tidak perlu diubah styling maupun strukturnya,
 * dan seluruh aset visual 3D SVG lokal tetap terjaga 100%.
 */

import React from "react";
import designOne from "../assets/designone.svg";
import designTwo from "../assets/designtwo.svg";
import designThree from "../assets/designthree.svg";

/* ==========================================================================
   1. TRACKS MAPPING
   ========================================================================== */

/**
 * Pemetaan aset visual lokal berdasarkan ID track dari API.
 * Menjamin gambar 3D SVG asli tidak hilang saat data diambil dari server.
 */
const TRACK_VISUALS = {
    "research-discovery": {
        image: designThree,
        bgColor: "#E8F0FE",
        defaultLabel: "EXPLORE THE WHY",
    },
    "design-creativity": {
        image: designOne,
        bgColor: "#FEF4D9",
        defaultLabel: "MAKE IT MEANINGFUL",
    },
    "development": {
        image: designTwo,
        bgColor: "#E6F4EA",
        defaultLabel: "BRING IDEAS TO LIFE",
    },
};

/**
 * Mengubah 1 objek track API menjadi props yang siap dipakai oleh TrackCard.
 * @param {Object} apiTrack - Objek track dari GET /tracks
 */
export function mapTrackToCardProps(apiTrack) {
    const visual = TRACK_VISUALS[apiTrack.id] || {
        image: designThree,
        bgColor: "#E8F0FE",
        defaultLabel: "LEARNING TRACK",
    };

    return {
        id: apiTrack.id,
        image: visual.image,
        label: apiTrack.tagline ? apiTrack.tagline.toUpperCase() : visual.defaultLabel,
        title: apiTrack.name,
        description: apiTrack.description,
        category: Array.isArray(apiTrack.skills) ? apiTrack.skills.join(" · ") : (apiTrack.skills || ""),
        link: apiTrack.explore_link || `/overview?track=${apiTrack.id}`,
        bgColor: visual.bgColor,
        raw: apiTrack,
    };
}

/* ==========================================================================
   2. FORMATS MAPPING
   ========================================================================== */

const FORMAT_THEMES = {
    "study-groups": {
        themeClass: "format-theme-blue",
        linkText: "Look into study groups",
        linkUrl: "#study-groups",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
            </svg>
        ),
    },
    "hands-on-workshops": {
        themeClass: "format-theme-green",
        linkText: "Explore upcoming workshops",
        linkUrl: "#workshops",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    "project-circles": {
        themeClass: "format-theme-yellow",
        linkText: "Learn about project circles",
        linkUrl: "#project-circles",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
                <path d="M16 4.7a3.5 3.5 0 0 1 0 6.6" />
                <path d="M18 14.3c2 .8 3.5 2.7 3.5 5.7" />
            </svg>
        ),
    },
    "knowledge-sharing": {
        themeClass: "format-theme-red",
        linkText: "See sharing sessions",
        linkUrl: "#knowledge-sharing",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3Z" />
            </svg>
        ),
    },
};

/**
 * Mengubah data GET /formats menjadi format kartu UI
 */
export function mapFormatItem(apiFormat) {
    const meta = FORMAT_THEMES[apiFormat.id] || {
        themeClass: "format-theme-blue",
        linkText: "Explore format",
        linkUrl: `#${apiFormat.id}`,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
    };

    return {
        id: apiFormat.id,
        title: apiFormat.name,
        description: apiFormat.description,
        themeClass: meta.themeClass,
        linkText: meta.linkText,
        linkUrl: meta.linkUrl,
        icon: meta.icon,
        cta: apiFormat.cta,
    };
}

/* ==========================================================================
   3. JOURNEY MAPPING
   ========================================================================== */

/**
 * Mengubah data GET /journey agar memiliki nomor format 2-digit (01, 02, 03, 04)
 */
export function mapJourneyItem(apiStep) {
    return {
        id: apiStep.id,
        number: String(apiStep.step || 1).padStart(2, "0"),
        title: apiStep.title,
        description: apiStep.description,
    };
}
