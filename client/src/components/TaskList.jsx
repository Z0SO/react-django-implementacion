import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import TaskTarjeta from "./TaskTarjeta";

//peticion al backend
function TaskList() {
  // creo una variable que almacene el array que es el json de todas las tareas
  const [tarea, settarea] = useState([]);

  // hago uso del hook useeffect para que cuando cargue la pagina ejecute la accion
  useEffect(() => {
    // esta es la funcion que pide el JSON al backend
    async function cargarTareas() {
      const allTasks = await getAllTasks();

      console.log(allTasks.data);

      // seteo tarea los datos del objeto que recibo del backend, estoy guarnado un array con todas las tareas
      settarea(allTasks.data);
    }

    // ejecuto la funcion dentro del useeffect
    cargarTareas();
  }, []);

  // retorno del componente
  return (
    <div className="grid grid-cols-3 gap-3">
      {tarea.map((i_tarea) => (
        <TaskTarjeta key={i_tarea.id} i_tareaComponent={i_tarea} />
      ))}
    </div>
  );
}

export default TaskList;
