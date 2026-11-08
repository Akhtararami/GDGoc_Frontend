import React, { useState } from "react";
import marker from "../../assets/marker.svg";
import "../../App.css";
import "./contact.css";

const topics = [
    {
        id: "joining",
        title: "Joining & learning",
        sub: "Getting started, learning tracks, and participation",
        iconClass: "topic-icon-blue",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
        )
    },
    {
        id: "collaboration",
        title: "Collaboration",
        sub: "Community activities and shared ideas",
        iconClass: "topic-icon-green",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
            </svg>
        )
    },
    {
        id: "speaking",
        title: "Speaking & sharing",
        sub: "Workshops, knowledge sharing, and mentorship",
        iconClass: "topic-icon-yellow",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2a3 3 0 0 0 0 6" />
                <circle cx="12" cy="5" r="3" />
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            </svg>
        )
    },
    {
        id: "general",
        title: "General inquiry",
        sub: "Anything else you'd like to ask",
        iconClass: "topic-icon-gray",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
            </svg>
        )
    }
];

const categoryOptions = [
    "Joining & learning",
    "Collaboration",
    "Speaking & sharing",
    "General inquiry"
];

function ContactHero() {
    return (
        <div className="contact-hero">
            <div className="title-top">
                <img src={marker} alt="" />
                <p className="info-title">CONTACT · LET'S CONNECT</p>
            </div>

            <h1 className="contact-hero-title">
                Good things start with <span>hello.</span>
            </h1>

            <p className="contact-hero-desc">
                A question, a collaboration, or an idea for the community? Tell us what's on your mind.
            </p>
        </div>
    );
}

function ContactTopics({ activeTopic, onSelect }) {
    return (
        <div className="contact-left">
            <div className="contact-topics-label">
                <h2>What brings you here?</h2>
                <p>Pick the closest topic in the form. We'll take it from there.</p>
            </div>

            <div className="contact-topic-list">
                {topics.map((topic) => (
                    <button
                        key={topic.id}
                        type="button"
                        className={`contact-topic-item ${activeTopic === topic.id ? "active" : ""}`}
                        onClick={() => onSelect(topic.id)}
                        aria-pressed={activeTopic === topic.id}
                    >
                        <span className={`contact-topic-icon ${topic.iconClass}`}>
                            {topic.icon}
                        </span>
                        <span className="contact-topic-text">
                            <span className="contact-topic-title">{topic.title}</span>
                            <span className="contact-topic-sub">{topic.sub}</span>
                        </span>
                    </button>
                ))}
            </div>

            <div className="contact-social-box">
                <div className="title-top">
                    <img src={marker} alt="" />
                    <p className="info-title">STAY CURIOUS. STAY CONNECTED</p>
                </div>

                <h3>Looking for community updates?</h3>

                <p>
                    Follow <strong>@gdgoc.ugm</strong> for learning opportunities and what's happening in the community.
                </p>

                <a
                    href="https://www.instagram.com/gdgoc.ugm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                >
                    Find @gdgoc.ugm
                    <span className="arrow-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    );
}

function ContactForm({ activeTopic }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        category: activeTopic === "joining" ? "Joining & learning"
            : activeTopic === "collaboration" ? "Collaboration"
            : activeTopic === "speaking" ? "Speaking & sharing"
            : "General inquiry",
        subject: "",
        message: "",
        consent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contact-form-card">
            <div className="contact-form-card-header">
                <h2>Send us a message</h2>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                </svg>
            </div>

            <p className="contact-form-required-note">
                Fields marked <span style={{ color: "#C5221F" }}>*</span> are required.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label" htmlFor="firstName">
                            First name <span className="form-required">*</span>
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            className="form-input"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            autoComplete="given-name"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="lastName">
                            Last name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            className="form-input"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            autoComplete="family-name"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">
                        Email address <span className="form-required">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="Where we can reply to you"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="organization">
                        University / organization
                    </label>
                    <input
                        id="organization"
                        name="organization"
                        type="text"
                        className="form-input"
                        placeholder="Where you study or work (optional)"
                        value={formData.organization}
                        onChange={handleChange}
                        autoComplete="organization"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="category">
                        Inquiry category <span className="form-required">*</span>
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="form-select"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="subject">
                        Subject <span className="form-required">*</span>
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="form-input"
                        placeholder="A short introduction to your question"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="message">
                        Your message <span className="form-required">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Tell us a little about your question or idea..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                    />
                </div>

                <div className="form-consent">
                    <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="consent">
                        I agree that the information I share can be used to respond to this inquiry.
                    </label>
                </div>

                <div className="form-submit-row">
                    <button type="submit" className="form-submit-btn">
                        Send message
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>

                    <span className="form-privacy-note">
                        Please don't include passwords or sensitive personal information.
                    </span>
                </div>
            </form>
        </div>
    );
}

function ContactGuidance() {
    return (
        <div className="contact-guidance">
            <div className="contact-guidance-left">
                <div className="title-container">
                    <div className="title-top">
                        <img src={marker} alt="" />
                        <p className="info-title">A LITTLE GUIDANCE</p>
                    </div>

                    <h2 className="title-tittle">
                        Help us understand <br />
                        your idea.
                    </h2>

                    <div className="description-tittle">
                        <a href="/overview">
                            Explore the programs first
                            <span className="arrow-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-guidance-right">
                <div className="guidance-item">
                    <h3>For learning questions</h3>
                    <p>Tell us which topic interests you and where you are in your learning journey.</p>
                </div>

                <div className="guidance-item">
                    <h3>For collaborations</h3>
                    <p>Share the idea, who it's for, and how you imagine working with the community.</p>
                </div>

                <div className="guidance-item">
                    <h3>Not sure which category fits?</h3>
                    <p>Choose General inquiry. A clear question is always a good starting point.</p>
                </div>
            </div>
        </div>
    );
}

export { ContactHero, ContactTopics, ContactForm, ContactGuidance };
