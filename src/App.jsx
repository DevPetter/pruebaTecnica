import "./App.css";

import React, { useState } from "react";
import { Task } from "./components/Task";

export const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <h1>PRUEBA TÉCNICA</h1>
      <p>Pedro Quiñones Paternina</p>
      <hr />

      <Task setTasks={setTasks} />

    
        {tasks.map((task) => {
          return <label> <input type="checkbox" id="cbox1" value="first_checkbox"/>{task}</label>
        })}
      

      {/* <label><input type="checkbox" id="cbox1" value="first_checkbox"> Este es mi primer checkbox</label> */}
    </>
  );
};
