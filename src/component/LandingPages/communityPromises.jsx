import React from "react";
import blue from "./../../assets/blue.svg";
import red from "./../../assets/red.svg";
import green from "./../../assets/green.svg";
import { useFetch } from "../../hooks/useFetch";
import { getValues } from "../../services/api";
import { ErrorState } from "../common/StatusState";
import "../../App.css";

// Pemetaan icon berdasarkan ID atau urutan
const VALUE_ICONS = {
    "stay-curious": blue,
    "make-room": red,
    "learn-by-building": green,
    "give-something-back": green,
};

function CommunityPromises() {
    // Mengambil nilai komunitas dari API GET /values
    const { data: rawValues, loading, error, refetch } = useFetch(getValues);

    const values = Array.isArray(rawValues) ? rawValues : [];

    return (
        <>
            <hr />

            <div className="community-promises">
                {/* 1. Loading State */}
                {loading && (
                    <ul style={{ opacity: 0.6 }}>
                        <li className="api-skeleton-line" style={{ width: 140, height: 20 }}></li>
                        <li className="api-skeleton-line" style={{ width: 180, height: 20 }}></li>
                        <li className="api-skeleton-line" style={{ width: 150, height: 20 }}></li>
                    </ul>
                )}

                {/* 2. Error State */}
                {error && (
                    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 var(--page-x)" }}>
                        <ErrorState
                            title="Gagal memuat nilai komunitas"
                            message={error}
                            onRetry={refetch}
                        />
                    </div>
                )}

                {/* 3. Success State */}
                {!loading && !error && values.length > 0 && (
                    <ul>
                        {values.map((val, idx) => {
                            const icon = VALUE_ICONS[val.id] || (idx % 3 === 0 ? blue : idx % 3 === 1 ? red : green);
                            return (
                                <li key={val.id || val.title}>
                                    <img src={icon} alt="" aria-hidden="true" />
                                    {val.title}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>

            <hr />
        </>
    );
}

export default CommunityPromises;
