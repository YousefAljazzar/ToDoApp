import React, { useState } from "react";
import Button from "../button";
import { FaTrashAlt } from "react-icons/fa";
function RowItem({ item, handelDelete }) {
  const [completed, setCompleted] = useState(item.completed);

  const handleStatus = () => {
    setCompleted(!completed); // Toggle the completed state
  };
  return (
    <tr key={item.id}>
      <td className="w-33">{item.title}</td>
      <td className="w-20">
        <Button
          onClick={handleStatus}
          text={completed ? "Complete" : "Pending"}
          type={completed ? "Add" : ""}
        />
      </td>
      <td className="w-33" onClick={handelDelete}>
        <FaTrashAlt cursor={"Pointer"} />
      </td>
    </tr>
  );
}

export default RowItem;
