import React from "react";
import CommunityIntroduction from "./communityIntroduction";
import TrackDiscovery from "./trackdiscovery";
function discoverLearningLayout() {
    return (
        <div className="discover-learning-layout">
            <CommunityIntroduction />
            <TrackDiscovery />
        </div>
    );
}
export default discoverLearningLayout;