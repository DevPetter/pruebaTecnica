import "./App.css";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";
import { Task } from "./components/Task";
import { Title } from "./components/Title";

export const App = () => {
  const [tasks, setTasks] = useState(["tarea1", "tarea2"]);
  return (
    <>
      <Title/>
      <hr />

      <Task setTasks={setTasks} />
      {/*     
    {/* formulario de tareas, mapeado en el cual agrego un checkBox cuando se mapea el estado */}
      <Form>
        {tasks.map((task) => (
          <div key={`default-${task}`} className="mb-3">
            <Form.Check type="checkbox" label={task} />
          </div>
        ))}
      </Form>
    </>
  );
};
