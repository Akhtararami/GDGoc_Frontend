import React from "react";
import Navbar from "../component/navbar";
import OverviewHero from "../component/OverviewPages/overviewHero";
import OverviewTracks from "../component/OverviewPages/overviewTracks";
import OverviewTable from "../component/OverviewPages/overviewTable";
import OverviewFormats from "../component/OverviewPages/overviewFormats";
import OverviewJourney from "../component/OverviewPages/overviewJourney";
import OverviewBeginnerBanner from "../component/OverviewPages/overviewBeginnerBanner";
import CtaBanner from "../component/LandingPages/ctaBanner";
import Footer from "../component/footer";
import "../component/OverviewPages/overview.css";

function Overview() {
    return (
        <div className="overview-page">
            <Navbar />
            
            <OverviewHero />

            <div className="overview-body">
                <OverviewTracks />
                <OverviewTable />
            </div>

            <OverviewFormats />

            <div className="overview-body">
                <OverviewJourney />
            </div>

            <OverviewBeginnerBanner />

            <CtaBanner
                buttonText="Find your learning track"
                buttonLink="#tracks"
            />

            <Footer />
        </div>
    );
}

export default Overview;
