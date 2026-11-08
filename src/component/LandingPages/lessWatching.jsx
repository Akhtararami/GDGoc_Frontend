import React from "react";
import Title from "../title";
import LearningCard from "./learningCard";
import { useFetch } from "../../hooks/useFetch";
import { getFormats } from "../../services/api";
import { LoadingSkeleton, ErrorState, EmptyState } from "../common/StatusState";
import "../../App.css";

const iconProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
};

const BookIcon = (
    <svg {...iconProps}>
        <path d="M12 6.5C10.4 5.3 8.2 4.8 4 4.8v12.4c4.2 0 6.4.5 8 1.7 1.6-1.2 3.8-1.7 8-1.7V4.8c-4.2 0-6.4.5-8 1.7Z" />
        <path d="M12 6.5v12.4" />
    </svg>
);

const CodeIcon = (
    <svg {...iconProps}>
        <path d="m8.5 7.5-4.5 4.5 4.5 4.5" />
        <path d="m15.5 7.5 4.5 4.5-4.5 4.5" />
    </svg>
);

const UsersIcon = (
    <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <path d="M16 4.7a3.5 3.5 0 0 1 0 6.6" />
        <path d="M18 14.3c2 .8 3.5 2.7 3.5 5.7" />
    </svg>
);

const SparkleIcon = (
    <svg {...iconProps}>
        <path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3Z" />
    </svg>
);

// Map ikon dan subkategori berdasarkan ID format API
const FORMAT_META = {
    "study-groups": {
        icon: BookIcon,
        category: "Study groups & guided practice"
    },
    "hands-on-workshops": {
        icon: CodeIcon,
        category: "Workshops & technical sessions"
    },
    "project-circles": {
        icon: UsersIcon,
        category: "Project circles & sharing sessions"
    },
    "knowledge-sharing": {
        icon: SparkleIcon,
        category: "Knowledge sharing & talks"
    }
};

function LessWatching() {
    // Ambil data format dari GET /formats
    const { data: rawFormats, loading, error, refetch } = useFetch(getFormats);

    const formats = Array.isArray(rawFormats) ? rawFormats.map((item) => {
        const meta = FORMAT_META[item.id] || {
            icon: UsersIcon,
            category: "Community session"
        };
        return {
            id: item.id,
            icon: meta.icon,
            title: item.name,
            description: item.description,
            category: meta.category
        };
    }) : [];

    return (
        <section className="less-watching">
            <div className="section-inner">
                <Title
                    info="MORE THAN A CLASSROOM"
                    title="Less watching. More making."
                    description={
                        <p>Learn in a way that turns a new concept into something you can actually use.</p>
                    }
                />

                {/* 1. Loading State */}
                {loading && <LoadingSkeleton count={3} type="learning" />}

                {/* 2. Error State */}
                {error && (
                    <ErrorState
                        title="Gagal memuat format pembelajaran"
                        message={error}
                        onRetry={refetch}
                    />
                )}

                {/* 3. Empty State */}
                {!loading && !error && formats.length === 0 && (
                    <EmptyState message="Belum ada format kegiatan yang tersedia saat ini." />
                )}

                {/* 4. Success State */}
                {!loading && !error && formats.length > 0 && (
                    <div className="learning-grid">
                        {formats.map((way) => (
                            <LearningCard
                                key={way.id || way.title}
                                icon={way.icon}
                                title={way.title}
                                description={way.description}
                                category={way.category}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default LessWatching;
