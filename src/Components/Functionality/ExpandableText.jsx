import React, { useState } from "react";

const ExpandableText = ({ children, maxChars = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.legnth <= maxChars) return <p>{children}</p>;
  const text = isExpanded
    ? children.substring(0, 1000)
    : children.substring(0, maxChars);
  return (
    <p>
      {text}...{" "}
      <button
        className="btn btn-primary"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
