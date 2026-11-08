
import React from "react";

import blue from "./../../assets/blue.svg";
import red from "./../../assets/red.svg";
import green from "./../../assets/green.svg";

function CommunityPromises() {
    return (
        <>
            <hr />

            <div className="community-promises">
                <ul>
                    <li>
                        <img src={blue} alt="Blue Icon" />
                        Learn by doing
                    </li>

                    <li>
                        <img src={red} alt="Red Icon" />
                        Connect across disciplines
                    </li>

                    <li>
                        <img src={green} alt="Green Icon" />
                        Build with purpose
                    </li>
                </ul>
            </div>

            <hr />
        </>
    );
}

export default CommunityPromises;
