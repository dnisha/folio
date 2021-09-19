import React from "react";
import Seperator from "../../common/seperstor";
import SocialContact from "../../common/social-contact";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label htmlFor="" className="section-title"></label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform </p>
          <SocialContact />
        </div>
        <div className="download">
          <a href={require("../../../assets/Resume.docx").default}>
            <img src={require("../../../assets/download.png").default} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
