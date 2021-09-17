import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/index";
import Web from "./web/index";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">DEEPAK NISHAD</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <span className = "menu-icon">
              <ion-icon name="grid-outline"></ion-icon>
            </span>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
