import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="py-3 flex justify-between">
      <Link to="/task-list">
        <h1 className="font-bold text-3xl mb-4">
          <div><p className=" hover:transition-all hover:text-emerald-300" >Z0SO</p></div>
        </h1>
      </Link>

      <button className="bg-emerald-700 hover:transition-all hover:bg-emerald-500  hover:shadow-md  hover:shadow-emerald-300  px-3 py-2 rounded-lg">
        <Link to="/task-create">New Task</Link>
      </button>

      {/* <Link to="/task-list">Task List</Link> */}
    </div>
  );
}
