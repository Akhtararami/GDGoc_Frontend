import React from "react";
import Title from "../title";
import TrackCard from "./Trackcard";
import designOne from "./../../assets/designone.svg";
import designTwo from "./../../assets/designtwo.svg";
import designThree from "./../../assets/designthree.svg";
import "../../App.css";

const tracks = [
    {
        image: designThree,
        label: "EXPLORE THE WHY",
        title: "Research & discovery",
        description: "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
        category: "Problem framing · User research · Product thinking",
        link: "/tracks/research",
        bgColor: "#E8F0FE"
    },
    {
        image: designOne,
        label: "MAKE IT MEANINGFUL",
        title: "Design & creativity",
        description: "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
        category: "UI/UX · Visual storytelling · Prototyping",
        link: "/tracks/design",
        bgColor: "#FEF4D9"
    },
    {
        image: designTwo,
        label: "BRING IDEAS TO LIFE",
        title: "Development",
        description: "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
        category: "Web & mobile · Cloud · AI foundations",
        link: "/tracks/development",
        bgColor: "#E6F4EA"
    }
];

function TrackDiscovery() {
    return (
        <div className="track-discovery" id="overview">

            <div className="track-title">
                <Title
                    info="Find your starting point"
                    title={
                        <>
                            Many interests. One shared <br />
                            journey.
                        </>
                    }
                    description={
                        <div className="trackDesc">
                            <p>
                                Follow what excites you. Explore a
                                track, then connect the dots with others.
                            </p>

                            <a href="">
                                See the overview
                                <span className="arrow-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    }
                />
            </div>

            <section className="container-cardtrack">
                {tracks.map((track) => (
                    <TrackCard
                        key={track.title}
                        image={track.image}
                        label={track.label}
                        title={track.title}
                        description={track.description}
                        category={track.category}
                        link={track.link}
                        bgColor={track.bgColor}
                    />
                ))}
            </section>

        </div>
    );
}

export default TrackDiscovery;
