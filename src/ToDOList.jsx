import { useState } from "react";

function ToDOList() {
  const [task, setTask] = useState(["Wake up early"]);

  const [newTask, setNewTask] = useState("");

  function handelInputChange(event) {
    setNewTask(event.target.value);
  }

  // handleAddTask function
  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTask((task) => [...task, newTask]);
      setNewTask("");
    }
  }

  function handelDeleteTask(index) {
    const update = task.filter((_, i) => i !== index);
    setTask(update);
  }

  function MoveUp(index) {
    if (index > 0) {
      const update = [...task];
      [update[index], update[index - 1]] = [update[index - 1], update[index]];
      setTask(update);
    }
  }
  function MoveDown(index) {
    if (index < task.length - 1) {
      const update = [...task];
      [update[index], update[index + 1]] = [update[index + 1], update[index]];
      setTask(update);
    }
  }

  return (
    <>
      <div className="container">
        <h1>To-Do-List</h1>
        <input
          type="text"
          value={newTask}
          placeholder="Add Your Task"
          onChange={handelInputChange}
        />
        <button className="add" onClick={handleAddTask}>
          Add
        </button>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button
                className="delete"
                onClick={() => handelDeleteTask(index)}
              >
                Delete
              </button>
              <button className="moveUp" onClick={() => MoveUp(index)}>
                Move Up
              </button>
              <button className="MoveDown" onClick={() => MoveDown(index)}>
                Move Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDOList;
