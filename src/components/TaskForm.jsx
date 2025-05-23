
import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, initialData, onClose }) => { 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [day, setDay] = useState("Monday");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setPriority(initialData.priority);
      setDay(initialData.day);
    } else {
     
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setDay("Monday");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit({
      title,
      description,
      priority,
      day,
      status: initialData ? initialData.status : "pending" 
    });
   
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-xl">
      <div className="grid grid-cols-1 gap-4"> 
        <input
          className="border p-2 rounded w-full"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          className="border p-2 rounded w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        ></textarea>
        <select className="border p-2 rounded w-full" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select className="border p-2 rounded w-full" value={day} onChange={(e) => setDay(e.target.value)}>
          {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div className="mt-6 flex justify-end space-x-2">
        <button
          type="button" 
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-400 "
          onClick={onClose}
        >
          Cancel
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          {initialData ? "Save Changes" : "+ Add Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;