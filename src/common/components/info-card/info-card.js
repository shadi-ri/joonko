import React from "react";
import "./info-card.css";

const InfoCard = () => {

    return (
        
        <div className="main-container">
            <h1 className="main-header">The Future of Work in the now: Why you should Become Remote-ready</h1>
            <div className="secondary-header">Infographic</div>
            <div className="informatic-paragraph">
                The results are in, and the verdict? Remote is here to stay.
                Thanks to a global pandemic companies have had to re
                the power of distributed workforces and we’ve put together all
                the reasons why going remote is the right move to make.
                In this infographics, you’ll see:
            </div>
            <ul className="informatic-paragraph">
                <li>How remote work broadens the talent pool </li>
                <li>The productivity results behind distributed teams</li>
                <li>An increase in diversity as a result of remote recruitment</li>
                <li>Money saved on operational costs and salary negotiations</li>
            </ul>
            <div className="informatic-paragraph">
            What better time to refresh your strategy than on the brink of a
             whole new world?Dig into this list of recruiting methodologies
              and adjust your sails for the future!
            </div>
        </div>
    );
}

export default InfoCard;
