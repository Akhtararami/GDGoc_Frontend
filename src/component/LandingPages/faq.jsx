
import React, { useState } from "react";
import Title from "../title";
import { useFetch } from "../../hooks/useFetch";
import { getFaqs } from "../../services/api";
import {
    LoadingSkeleton,
    ErrorState,
    EmptyState,
} from "../common/StatusState";
import "../../App.css";

function Faq({ category }) {
    // 3 item pertama terbuka secara default
    const [openItems, setOpenItems] = useState([0, 1, 2]);

    // Mengambil data FAQ dari API
    const {
        data: rawFaqs,
        loading,
        error,
        refetch,
    } = useFetch(
        (signal) => getFaqs(category, signal),
        [category]
    );

    const questions = Array.isArray(rawFaqs) ? rawFaqs : [];

    const toggleItem = (index) => {
        setOpenItems((prev) =>
            prev.includes(index)
                ? prev.filter((item) => item !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="faq w-full">
            <div className="faq-left min-w-0">
                <Title
                    info="A FEW GOOD QUESTIONS"
                    title={
                        <>
                            Wondering <br />
                            where <br />
                            to begin?
                        </>
                    }
                    description={
                        <a href="/contact">
                            Ask us a question
                            <span
                                className="arrow-icon"
                                aria-hidden="true"
                            />
                        </a>
                    }
                />
            </div>

            <div className="faq-right w-full min-w-0">
                {/* Loading State */}
                {loading && (
                    <LoadingSkeleton count={3} type="faq" />
                )}

                {/* Error State */}
                {error && (
                    <ErrorState
                        title="Gagal memuat pertanyaan FAQ"
                        message={error}
                        onRetry={refetch}
                    />
                )}

                {/* Empty State */}
                {!loading && !error && questions.length === 0 && (
                    <EmptyState
                        message="Belum ada pertanyaan FAQ yang tersedia saat ini."
                    />
                )}

                {/* Success State */}
                {!loading && !error && questions.length > 0 && (
                    <div className="faq-list w-full min-w-0">
                        {questions.map((item, index) => {
                            const isOpen = openItems.includes(index);

                            return (
                                <div
                                    className={`faq-item min-w-0 ${
                                        isOpen ? "open" : ""
                                    }`}
                                    key={item.id || item.question}
                                >
                                    <button
                                        type="button"
                                        className="faq-question w-full"
                                        onClick={() => toggleItem(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="min-w-0">
                                            {item.question}
                                        </span>

                                        <svg
                                            className="faq-chevron shrink-0"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d="m4.5 7.5 5.5 5.5 5.5-5.5" />
                                        </svg>
                                    </button>

                                    {isOpen && (
                                        <p className="faq-answer">
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Faq;
