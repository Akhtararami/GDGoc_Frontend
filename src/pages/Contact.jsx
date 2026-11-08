import React, { useState } from "react";
import { ContactHero, ContactTopics, ContactForm, ContactGuidance } from "../component/ContactPages/contactSections";
import CtaBanner from "../component/LandingPages/ctaBanner";
import { useFetch } from "../hooks/useFetch";
import { getInquiryCategories } from "../services/api";
import "../component/ContactPages/contact.css";

function Contact() {
    // Mengambil kategori formulir kontak dari GET /inquiry-categories
    const { data: rawCategories, loading, error, refetch } = useFetch(getInquiryCategories);
    const categories = Array.isArray(rawCategories) ? rawCategories : [];

    const [selectedTopic, setSelectedTopic] = useState("joining-learning");

    // Tentukan activeTopic: gunakan pilihan pengguna, atau fallback ke kategori pertama
    const activeTopic = categories.length > 0 && !categories.some((c) => c.id === selectedTopic)
        ? categories[0].id
        : selectedTopic;

    return (
        <div className="contact-page">

            <ContactHero />

            <div className="contact-body">
                <ContactTopics
                    categories={categories}
                    loading={loading}
                    error={error}
                    onRetry={refetch}
                    activeTopic={activeTopic}
                    onSelect={setSelectedTopic}
                />
                <ContactForm
                    categories={categories}
                    activeTopic={activeTopic}
                    onCategoryChange={setSelectedTopic}
                />
            </div>

            <hr />

            <ContactGuidance categories={categories} />

            <CtaBanner
                buttonText="Explore the community"
                buttonLink="/overview"
            />

        </div>
    );
}

export default Contact;
