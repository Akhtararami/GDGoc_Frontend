import React, { useState } from "react";
import Title from "../title";
import "../../App.css";

const questions = [
    {
        question: "Do I need to know how to code?",
        answer: "No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too."
    },
    {
        question: "Is this only for computer science students?",
        answer: "Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests."
    },
    {
        question: "How can I find learning opportunities?",
        answer: "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved."
    }
];

function Faq() {
    const [openItems, setOpenItems] = useState([0, 1, 2]);

    const toggleItem = (index) => {
        setOpenItems((prev) =>
            prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
        );
    };

    return (
        <section className="faq">
            <div className="faq-left">
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
                            <span className="arrow-icon" aria-hidden="true"></span>
                        </a>
                    }
                />
            </div>

            <div className="faq-list">
                {questions.map((item, index) => {
                    const isOpen = openItems.includes(index);

                    return (
                        <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                            <button
                                type="button"
                                className="faq-question"
                                onClick={() => toggleItem(index)}
                                aria-expanded={isOpen}
                            >
                                {item.question}
                                <svg
                                    className="faq-chevron"
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
                            {isOpen && <p className="faq-answer">{item.answer}</p>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Faq;
