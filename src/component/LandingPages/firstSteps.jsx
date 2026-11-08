import React from "react";
import Title from "../title";
import "../../App.css";

const steps = [
    {
        number: "01",
        title: "Follow your curiosity",
        description: "Explore the tracks and find a topic you want to understand better."
    },
    {
        number: "02",
        title: "Learn alongside others",
        description: "Join a learning opportunity, ask a question, and share your perspective."
    },
    {
        number: "03",
        title: "Turn learning into action",
        description: "Practice through a project, exchange feedback, and pass something on."
    }
];

function FirstSteps() {
    return (
        <section className="first-steps">
            <Title
                info="MAKE YOUR FIRST MOVE"
                title={
                    <>
                        You don’t need to have it all <br />
                        figured out.
                    </>
                }
            />

            <div className="steps-grid">
                {steps.map((step) => (
                    <div className="step-item" key={step.number}>
                        <span className="step-number">{step.number}</span>
                        <div className="step-divider"></div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FirstSteps;
