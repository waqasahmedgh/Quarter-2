"use client";
import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editing, setEditing] = useState(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTask !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleEdit = (index: number) => {
    console.log("editing : " + index);
    if (index) {
      setEditing(index);
    }
  };

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (editing !== null) {
      console.log("editing :" + editing);
      const updatedTasks = tasks.map((task, index) => {
        console.log("editing 2:" + editing + "index 2 :" + index);
        if (index === editing) {
          console.log("task :" + task);
          return { ...task, title: event.target.value };
        }
        console.log("task out if:" + task);
        return task;
      });
      setTasks(updatedTasks);
      setEditing(null);
    }
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Add new task"
        />
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} className="flex items-center justify-between mb-4">
            <input
              className="mr-4"
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                const updatedTasks = tasks.map((task) =>
                  task.id === tasks[index].id
                    ? { ...task, completed: !task.completed }
                    : task
                );
                setTasks(updatedTasks);
              }}
            />
            {editing === index ? (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={task.title}
                onChange={handleUpdate}
              />
            ) : (
              <span className={`${task.completed ? "line-through" : ""}`}>
                {task.title}
              </span>
            )}
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
