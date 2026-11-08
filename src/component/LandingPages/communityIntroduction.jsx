import react from "react";
import Title from "../title";
import arrow from "./../../assets/arrow.svg";
import "../../App.css"

function communityIntroduction() {
  return (
    <div className="community-introduction">
        <div className="community-left">
            <Title
                info="A campus. A community."
                title={
                    <>
                        Not just learning <br />
                        tech. <br />
                        Finding your people.
                    </>
                }
                description={
                    <a
                        href="https://gdg.community.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        More about GDGoC UGM
                        <span className="image-desc"></span>
                    </a>
                }
            />
        </div>
        <div className="community-right">
            <p>Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: we can go <span>further</span>  when we <span>learn</span> with each other.</p>
            <p>From your first line of code to your next product idea, there’s room to ask questions, share what you know, and try something new.</p>
            <ul>
                <li>Student-led</li>
                <li>Peer-powered</li>
                <li>Curiosity-first</li>
            </ul>
        </div>
    </div>
  );
}   
export default communityIntroduction;