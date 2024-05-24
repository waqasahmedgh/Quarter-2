"use client";
import React, { useState } from "react";

// Define type for a task
type Task = {
  id: number;
  text: string;
};

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTaskText, setEditingTaskText] = useState<string>("");

  // Function to add a new task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  // Function to delete a task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to edit a task
  const editTask = (id: number) => {
    setEditingTaskId(id);
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTaskText(taskToEdit.text);
    }
  };

  // Function to save edited task
  const saveEditedTask = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === editingTaskId) {
          return { ...task, text: editingTaskText };
        }
        return task;
      })
    );
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                  className="border rounded px-2 py-1 mr-2"
                />
                <button
                  onClick={saveEditedTask}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button
                  onClick={() => editTask(task.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
