import React, { useState } from 'react'

export const Task = ({setTasks}) => {
    const [inputValue, setInputValue] = useState("Tarea")

    const onInputValueChange = ({ target }) => {
        setInputValue(target.value);
      };

      const onSubmit = (event)=>{
        event.preventDefault();  //Evitar que el navegador web se refresque cada que se ingresa una tarea en el input
        if(inputValue.trim().length <=1) return
        setTasks((tasks)=>[inputValue, ...tasks]) //Actualizar el estado en tareas
        setInputValue("")//Limpiar la caja de texto por medio de nuestro estado
      }

  return (
      <form onSubmit={(event)=> onSubmit(event)}>
        {/* Formulario con el input */}
        <h1>Tareas. </h1>
        <p>Escribe nueva tarea y enter para ingresar.</p>
        
        <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={onInputValueChange}
      />
    </form>
  )
}
