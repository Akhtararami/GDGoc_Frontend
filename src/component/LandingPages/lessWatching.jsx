import React from "react";
import Title from "../title";
import LearningCard from "./learningCard";
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

const ways = [
    {
        icon: BookIcon,
        title: "Study together",
        description: "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
        category: "Study groups & guided practice"
    },
    {
        icon: CodeIcon,
        title: "Try it hands-on",
        description: "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
        category: "Workshops & technical sessions"
    },
    {
        icon: UsersIcon,
        title: "Share the process",
        description: "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
        category: "Project circles & sharing sessions"
    }
];

function LessWatching() {
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

                <div className="learning-grid">
                    {ways.map((way) => (
                        <LearningCard
                            key={way.title}
                            icon={way.icon}
                            title={way.title}
                            description={way.description}
                            category={way.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LessWatching;
