import React from "react";

const Header = () => {
  return (
    <>
      <div className="header fs-1">
        <div className="px-4 md:px-8 lg:px16 lx:px-32 2xl:px-64">UZ GOSSIP</div>
        <a className="set">
          <img src="src\Images\logo.webp" className="about"></img>
        </a>
        <a>
          <img src="src\Images\settings2.png" className="settings"></img>
        </a>
        <a>
          <img src="src\Images\menu.png" className="main"></img>
        </a>
      </div>
    </>
  );
};

export default Header;
