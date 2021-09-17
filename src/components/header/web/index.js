import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project ">
          <span className="option-icon">
            <ion-icon name="book-outline"></ion-icon>
            <div className="space"> Projects</div>
          </span>
        </a>
      </div>
     
      <div className="web-option">
        <a href="#skills ">
          <span className="option-icon">
          <ion-icon name="laptop-outline"></ion-icon>
          <div className="space"> Skills</div>
          </span>
        </a>
      </div>
     
      <div className="web-option">
        <a href="#work ">
          <span className="option-icon">
          <ion-icon name="briefcase-outline"></ion-icon>
          <div className="space"> Work</div>
          </span>
        </a>
      </div>
     
      <div className="web-option">
        <a href="#contact ">
          <span className="option-icon">
          <ion-icon name="person-outline"></ion-icon>
          <div className="space"> Contact</div>
          </span>
        </a>
      </div>
     
    
     
    </div>
  );
}

export default Web;
