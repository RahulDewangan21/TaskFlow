import React, { useEffect, useState } from "react";
import WeeklyCalendar from "./components/WeeklyCalendar";
import TaskForm from "./components/TaskForm";
import Modal from "./components/Modal";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./utils/TaskService";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [dayFilter, setDayFilter] = useState("all");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

 
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const handleCreate = async (task) => {
    await createTask(task);
    loadTasks();
    setIsFormModalOpen(false);
  };

  const handleUpdate = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    loadTasks();
    setEditingTask(null);
    setIsFormModalOpen(false);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleOpenCreateModal = () => {
    setEditingTask(null);
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (task) => {
    setEditingTask(task);
    setIsFormModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingTask(null);
    setIsFormModalOpen(false);
  };

  
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      filter === "all" || task.status === filter;

    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;

    const matchesDay =
      dayFilter === "all" || task.day === dayFilter;

    return matchesStatus && matchesPriority && matchesDay;
  });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-2 font-sans">
        TaskFlow
      </h1>
      <p className="text-center text-gray-600 text-2xl mb-6 font-sans">
        Your weekly command center for productivity.
      </p>

      
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 text-left mt-15">
        <div>
          <label className="block font-medium mb-1 font-sans">
            Filter by Status:
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1 font-sans">
            Filter by Priority:
          </label>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="all">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1 font-sans">
            Filter by Day:
          </label>
          <select
            value={dayFilter}
            onChange={(e) => setDayFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="all">All Days</option>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>

      
      <div className="text-center mb-6">
        <button
          onClick={handleOpenCreateModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-sans transition flex"
        >
          + Add New Task
        </button>
      </div>

      
      <WeeklyCalendar
        tasks={filteredTasks}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onEdit={handleOpenEditModal}
      />

      
      <Modal
        isOpen={isFormModalOpen}
        onClose={handleCloseModal}
        title={editingTask ? "Edit Task" : "Add Task"}
      >
        <TaskForm
          onSubmit={
            editingTask
              ? (updatedTask) => handleUpdate(editingTask.id, updatedTask)
              : handleCreate
          }
          initialData={editingTask}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default App;




