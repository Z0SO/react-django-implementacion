// Formulario para generar nuevas tareas

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, getTask, updateTask } from "../api/task.api";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navegador = useNavigate();

  const parametros = useParams();

  // console.log(parametros)
  // console.log(parametros.id_tarea)

  // Maneja el envío del formulario
  const onSubmit = handleSubmit(async (data) => {
    if (parametros.id_tarea) {
      console.log("Estado de actualizacion");
      const resp_put = await updateTask(parametros.id_tarea, data);
      toast.success("Tarea Actualizada!!", {
        position: "bottom-right",
        style: {
          backgroundColor: "#202020",
          color: "lime",
        },
      });
      console.log(resp_put);
    } else {
      try {
        // Envía los datos del formulario al servidor
        await createTask(data)
          .then((response) => {
            // Si la operación es exitosa, maneja la respuesta del servidor
            console.log("Respuesta del servidor:", response.data);
            toast.success("Tarea Agregada Correctamente!!", {
              position: "bottom-right",
              style: {
                backgroundColor: "#202020",
                color: "lime",
              },
            });
          })
          .catch((error) => {
            // Si hay un error en la respuesta del servidor, maneja el error
            console.error("Error en la respuesta del servidor:", error);
          });
      } catch (error) {
        // Si hay un error al crear la tarea, maneja el error
        console.error("Error al crear la tarea:", error);
      }
    }
    // Redirige al usuario a otra página
    navegador("/");
  });

  useEffect(() => {
    async function cargar_tarea() {
      if (parametros.id_tarea) {
        const resp = await getTask(parametros.id_tarea);
        console.log(resp);
        setValue("title", resp.data.title); //el primer param hace referencia a el register del useform(), el segundo al dato que trae de backend
        setValue("description", resp.data.description);
      }
    }
    cargar_tarea();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} method="post">
        <input
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })} // debe coincidir con la base de datos el nombre title
        />
        {errors.title && <span className="font-bold text-red-500"><i>Este campo es requerido</i></span>}

        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="Descripcion"
          {...register("description", { required: true })}
        ></textarea>

        {errors.description && <span className="font-bold text-red-500"><i>Este campo es requerido</i></span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      <div className="flex justify-end">
        {parametros.id_tarea && (
          <button
            className="bg-red-500 p-3 rounded-lg block w-48 mt-3"
            onClick={async () => {
              const confirmacion = window.confirm("Estas seguro?");
              if (confirmacion) {
                await deleteTask(parametros.id_tarea);
                toast.success("Tarea Eliminada!!", {
                  position: "bottom-right",
                  style: {
                    backgroundColor: "#202020",
                    color: "lime",
                  },
                });
                navegador("/task-list");
              }
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
