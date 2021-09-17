import React from "react";
import "./mobile.css";

function Mobile({isOpen , setIsOpen}) {
  return (
    <div className="mobile">
      <span className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <ion-icon name="close-outline"></ion-icon>
      </span>

      <div className="mobile-option">
        <a href="#project ">
          <span className="option-icon">
            <ion-icon name="book-outline"></ion-icon>Projects
          </span>
        </a>
      </div>

      <div className="mobile-option">
        <a href="#skills ">
          <span className="option-icon">
            <ion-icon name="laptop-outline"></ion-icon>Skills
          </span>
        </a>
      </div>

      <div className="mobile-option">
        <a href="#work ">
          <span className="option-icon">
            <ion-icon name="briefcase-outline"></ion-icon>Work
          </span>
        </a>
      </div>

      <div className="mobile-option">
        <a href="#contact ">
          <span className="option-icon">
            <ion-icon name="person-outline"></ion-icon>Contact
          </span>
        </a>
      </div>
    </div>
  );
}

export default Mobile;
