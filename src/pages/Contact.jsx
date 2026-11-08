import React, { useState } from "react";
import Navbar from "../component/navbar";
import { ContactHero, ContactTopics, ContactForm, ContactGuidance } from "../component/ContactPages/contactSections";
import CtaBanner from "../component/LandingPages/ctaBanner";
import Footer from "../component/footer";
import "../component/ContactPages/contact.css";

function Contact() {
    const [activeTopic, setActiveTopic] = useState("joining");

    return (
        <div className="contact-page">
            <Navbar />

            <ContactHero />

            <div className="contact-body">
                <ContactTopics
                    activeTopic={activeTopic}
                    onSelect={setActiveTopic}
                />
                <ContactForm activeTopic={activeTopic} />
            </div>

            <hr />

            <ContactGuidance />

            <CtaBanner
                buttonText="Explore the community"
                buttonLink="/overview"
            />

            <Footer />
        </div>
    );
}

export default Contact;
