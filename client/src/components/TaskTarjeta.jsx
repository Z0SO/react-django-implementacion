import React from "react";
import { useNavigate } from "react-router-dom";

function TaskTarjeta({ i_tareaComponent }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-600 rounded-lg hover:cursor-pointer"
      onClick={() => {
        navigate(`/task-view/${i_tareaComponent.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{i_tareaComponent.title}</h1>
      <p className="text-slate-400">{i_tareaComponent.description}</p>

    </div>
  );
}

export default TaskTarjeta;
