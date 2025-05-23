
import React from "react";

const WeeklyCalendar = ({ tasks, onUpdate, onDelete, onEdit }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      {days.map((day) => (
        <div key={day} className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-lg mb-2">{day}</h2>
          {tasks.filter(task => task.day === day).map(task => (
            <div key={task.id} className="bg-white p-2 mb-2 rounded shadow text-sm">
              <div className="font-semibold">{task.title}</div>
              <div>{task.description}</div>
              <div className="text-xs text-gray-500">{task.priority} - {task.status}</div>
              <div className="mt-1 space-x-2">
                <button
                  className="text-green-600 hover:underline cursor-pointer"
                  onClick={() => onUpdate(task.id, { ...task, status: task.status === "completed" ? "pending" : "completed" })}
                >
                  {task.status === "completed" ? "Undo" : "Complete"}
                </button>
                <button
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </button>
                <button className="text-red-600 hover:underline cursor-pointer" onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WeeklyCalendar;