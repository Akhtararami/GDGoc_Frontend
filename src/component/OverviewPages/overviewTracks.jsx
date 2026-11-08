import React from "react";
import Title from "../title";
import TrackCard from "../LandingPages/Trackcard";
import designOne from "../../assets/designone.svg";
import designTwo from "../../assets/designtwo.svg";
import designThree from "../../assets/designthree.svg";
import "../../App.css";
import "./overview.css";

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

function OverviewTracks() {
  return (
    <section className="overview-tracks" id="tracks">
      <Title
        info="THREE LEARNING TRACKS"
        title={
          <>
            Three ways in. Plenty of ways <br />
            forward.
          </>
        }
        description={
          <p>
            Designed to stand alone or connect together. Follow what sparks your curiosity, then see how it connects with others.
          </p>
        }
      />

      <div className="container-cardtrack">
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
      </div>
    </section>
  );
}

export default OverviewTracks;
