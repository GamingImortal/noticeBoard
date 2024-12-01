import React from "react";
import TotalLikes from "./TotalLikes";
import TotalLikesMinus from "./TotalLikesMinus";

function Likes() {
  const handleClick = () => {
    if (likes === 0) {
      likes++;
      {
        TotalLikes;
      }
    } else {
      likes--;
      {
        TotalLikesMinus;
      }
    }
  };
}

return <button className="Like" onClick={handleClick}></button>;

export default Likes;
