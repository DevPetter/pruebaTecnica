import './App.css';

import React, { useState } from 'react'
import { Task } from './components/Task';

export const App = () => {
  const [tasks, setTasks] = useState([""])
  return (<>
    <h1>PRUEBA TÉCNICA</h1>
    <p>Pedro Quiñones Paternina</p>
    <hr/> 
    
    <Task setTasks={setTasks}/>

    <ol>
      {tasks.map((task)=>{
        return <li>{task}</li>
      })}
    </ol>

    </>
  )
}

