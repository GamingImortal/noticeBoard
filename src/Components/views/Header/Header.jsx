import React, { useState } from "react";

const Header = () => {
  return (
    <>
      <div className="header fs-1">
        <div className="HeaderHeading">
          <marquee behavior="slide">UNIVERSITY OF ZIMBABWE NOTICEBOARD</marquee>
        </div>
        <div className="set">
          <a href="">
            <img src="src\Images\logo.webp" className="about"></img>
          </a>

          <a href="">
            <img src="src\Images\settings2.png" className="settings"></img>
          </a>
          <a href="">
            <img src="src\Images\menu.png" className="main"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
