import { useEffect, useState } from "react";
import "./App.css";
import InputCard from "./components/inputCard";
import TodoCard from "./components/todos card";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  async function fetchData() {
    try {
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(respone.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <InputCard
        setData={setData}
        data={data}
        value={value}
        setValue={setValue}
      />
      <TodoCard data={data} setData={setData} />
    </div>
  );
}

export default App;
