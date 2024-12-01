import React from "react";
import { useState } from "react";
import SearchForm from "../SearchForm";

const HeadBody = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setSearchVisible(true);
  };
  return (
    <>
      <div className="Featured">
        <a href="" className="HeadBody">
          <img
            className="HeadBodyPics"
            src="https://smapse.com/storage/2020/05/converted/825_585_university-of-zimbabwe-smapse9.jpg"
          ></img>
        </a>
        <a href="" className="HeadBody">
          {" "}
          <img
            className="HeadBodyPics"
            src="src\Images\WhatsApp Image 2024-11-29 at 12.54.42_1c6f450e.jpg"
          ></img>
        </a>{" "}
        <a href="" className="HeadBody">
          <img
            className="HeadBodyPics"
            src="https://spikedmedia.co.zw/wp-content/uploads/UZ-Library-810x525.jpeg"
          ></img>
        </a>{" "}
        {!isSearchVisible ? (
          <a href="#" className="HeadBody" onClick={handleClick}>
            <img
              src="src/Images/search2.jpeg"
              className="search"
              alt="Search"
            />
          </a>
        ) : (
          <SearchForm />
        )}
      </div>
    </>
  );
};

export default HeadBody;
