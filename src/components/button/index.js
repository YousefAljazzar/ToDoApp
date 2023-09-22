import "./style.css";
import React from "react";

function Button({ text, type, onClick }) {
  return (
    <div
      className={`btn ${type === "Add" ? "bg-green" : "bg-red"}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Button;
