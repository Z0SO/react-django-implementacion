import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskFormPage } from "./pages/TaskFormPage";
import TaskListPage from "./pages/TaskListPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import Prueba from "./pages/Prueba";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto ">
        <Navigation />

        <Routes>
          {/* redireccionamiento a la lista de tareas */}
          <Route path="/" element={<Navigate to={"/task-list"} />} />

          {/* ruta de creacion de tareas */}
          <Route path="/task-create" element={<TaskFormPage />} />

          {/* LISTA DE TAREAS */}
          <Route path="/task-list" element={<TaskListPage />} />
          
          <Route path="/prueba" element={<Prueba />}/>

          <Route path="/task-view/:id_tarea" element={<TaskFormPage />} />
        </Routes>
        <Toaster />

      </div>

    </BrowserRouter>
  );
}

export default App;
