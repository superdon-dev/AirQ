import React from "react";
import pic1 from "../../assets/images/pic1.svg";
import pic2 from "../../assets/images/pic2.svg";
import pic3 from "../../assets/images/pic3.svg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <React.Fragment>
      <h3 className="TextTitle">What we do?</h3>
      <div className="AboutSection">
        <div className="Card">
          <div className="Card__image">
            <img src={pic1} alt="CardImage" />
          </div>
          <h3 className="Card__title">Analytics</h3>
          <p>
            We analyze, visualize and provide you the data we gather from our
            services.
          </p>
        </div>
        <div className="Card">
          <div className="Card__image">
            <img src={pic2} alt="CardImage" />
          </div>
          <h3 className="Card__title">Stats</h3>
          <p>
            Using the data, we provide statistics about the air quality
            standards in cities in Macedonia.
          </p>
        </div>
        <div className="Card">
          <div className="Card__image">
            <img src={pic3} alt="CardImage" />
          </div>
          <h3 className="Card__title">Realtime Update</h3>
          <p>
            Our data is updated and collected hourly in order to provide the
            realtime stats.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AboutSection;
