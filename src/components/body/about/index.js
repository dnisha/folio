import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="äbout">
      <div className="about-top">
        <div className="about-info">
          Hello There ,I am
          <br />
          <span class="info-name"> Deepak Nishad.</span>
          <br /> I love experimenting with web.
        </div>
        <div className="picture">
          <img src={require("../../../assets/coding.png").default} alt="" />
        </div>
      </div>
      <div className="about-bottom"> <SocialContact /></div>
    </div>
  );
}

export default About;
