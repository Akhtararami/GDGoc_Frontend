
import React from "react";
import Navbar from "../component/navbar";
import Dashboard from "../component/LandingPages/dashboard";
import CommunityPromises from "../component/LandingPages/communityPromises";
import Right from "./../assets/rightdb.svg";
import communitycolors from "./../assets/communitycolors.svg";
import marker from "./../assets/marker.svg";
import DiscoverLearningLayout from "../component/LandingPages/discoverLearningLayout";
import LessWatching from "../component/LandingPages/lessWatching";
import ProjectShowcase from "../component/LandingPages/projectShowcase";
import FirstSteps from "../component/LandingPages/firstSteps";
import InclusiveBanner from "../component/LandingPages/inclusiveBanner";
import Faq from "../component/LandingPages/faq";
import CtaBanner from "../component/LandingPages/ctaBanner";
import Footer from "../component/footer";

function Landing() {
    return (
        <>
            <Navbar />

            <div className="dashboard-container">
                
                <Dashboard
                image={Right}
                title="Big ideas."
                titlebottom="Built together."
                info="GDGoC UGM • 2026/2027"
                infoIcon={marker}
                description={
                    <>
                    A place for curious minds at <span>Universitas Gadjah Mada</span> to learn, connect, and build technology that matters. 
                     
                    </>
                }
                button="Find your learning track"
                buttonLink="Get to know us"
                little="Different backgrounds. A shared curiosity."
                littleImage={communitycolors}
                />

            </div>
            <CommunityPromises />
            <DiscoverLearningLayout />
            <LessWatching />
            <div className="landing-body">
                <ProjectShowcase />
                <FirstSteps />
            </div>
            <InclusiveBanner />
            <div className="landing-body">
                <Faq />
            </div>
            <CtaBanner />
            <Footer />
        </>
    );
}

export default Landing;
