import React from "react";
import Button from "../button";
import "./style.css";
function InputCard({ value, data, setData, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const newItem = () => {
    const newObj = {
      title: value,
      completed: false,
      id: Math.random(),
    };
    setData([newObj, ...data]);
    setValue("");
  };

  return (
    <div className="card">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="What would you like to do?"
      />
      <Button text={"Add"} type={"Add"} onClick={newItem} />
    </div>
  );
}

export default InputCard;
