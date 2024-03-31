import React from "react";
import TaskList from "../components/TaskList";

function TaskListPage() {
  return (
    <div>
      {/* debe retornar el componente encargado de traer datos del backend */}
      <TaskList />
    </div>
  );
}

export default TaskListPage;
