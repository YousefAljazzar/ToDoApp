import React, { useState } from "react";
import Button from "../button";
import { FaTrashAlt } from "react-icons/fa";
import "./style.css";
function RowItem({ item, handelDelete }) {
  const [completed, setCompleted] = useState(item.completed);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleStatus = () => {
    setCompleted(!completed);
  };
  const handleDelete = () => {
    setIsDeleting(true); // Trigger deletion animation
    setTimeout(() => {
      handelDelete(); // Perform actual deletion after a delay
    }, 300); // Adjust the delay as needed
  };
  return (
    <tr key={item.id} className={isDeleting ? "deleting" : ""}>
      <td className="w-33">{item.title}</td>
      <td className="w-20">
        <Button
          onClick={handleStatus}
          text={completed ? "Complete" : "Pending"}
          type={completed ? "Add" : ""}
        />
      </td>
      <td className="w-33" onClick={handleDelete}>
        <FaTrashAlt cursor={"Pointer"} />
      </td>
    </tr>
  );
}

export default RowItem;
