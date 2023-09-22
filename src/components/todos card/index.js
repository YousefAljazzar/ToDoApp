import RowItem from "../row table";
import "./style.css";
import React from "react";

function TodoCard({ data, setData }) {
  return (
    <div className="card todo-card">
      <h2>Todo list</h2>
      <table>
        <tr>
          <th>List</th>
          <th>Status</th>
          <th>Close</th>
        </tr>

        {data.map((item) => {
          return (
            <RowItem
              item={item}
              handelDelete={() => {
                const filted = data.filter((el) => el.id !== item.id);
                console.log(filted);
                setData(filted);
              }}
            />
          );
        })}
      </table>
    </div>
  );
}

export default TodoCard;
