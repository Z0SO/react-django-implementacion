import axios from "axios";

// const taskApi = axios.create({baseURL: "http://localhost:8000/tasks/api-v1/tasks",});
const baseURL = "http://localhost:8000/tasks/api-v1/tasks/";

export const getAllTasks = () => axios.get(baseURL);

export const createTask = (task) => axios.post(baseURL, task);

export const deleteTask = (id) => axios.delete(`${baseURL}${id}`);

export const updateTask = (id, task) => axios.put(`${baseURL}${id}/`, task);

export const getTask = (id) => axios.get(`${baseURL}${id}/`);
