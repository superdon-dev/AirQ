import React from "react";
import process from "../../assets/images/process.svg";
import "./ProcessSection.css";
const ProcessSection = () => {
  return (
    <React.Fragment>
      <h3 className="TextTitle">Process workflow</h3>
      <div className="ProcessSection">
        <div className="Card">
          <h3>
            The data is fetched from API that provides realtime information
            about the level of air pollutants. We collect them in out database
            that allows us show realtime stats for our users. Then we refactor
            and analyze them historically showing them in userfriendly format.
          </h3>
          <img src={process} alt="ProcessImage" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProcessSection;
