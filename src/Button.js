import React from "react";

const Button = ({ content, onClick, type }) => {
  return (
    <div
      className={`button ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onClick(content)}
    >
      {content}
    </div>
  );
};

export default Button;