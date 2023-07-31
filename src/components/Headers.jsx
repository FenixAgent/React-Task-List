import { useState } from "react";

const Header = () => {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleInput = (event) => {
    setInputTask(event.target.value);
  };

  const handleButton = (event) => {
    const theTask = {
      id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
      taskName: inputTask
    };

    setTask([...task, theTask]);
    setInputTask("");
  };

  const deleteTask = (aTask) => {
    const newTodoList = task.filter((item) => {
      return item.id !== aTask;
    });
    setTask(newTodoList);
  };

  const alertNoTask = () => {
    alert("You must enter a task");
  };

  return (
    <>
      <input
        style={{ margin: "50px 0", height: "50px", width: "90%" }}
        type="text"
        className="user-input"
        placeholder="Add New Task..."
        value={inputTask}
        onChange={handleInput}
      />
      <button
        onClick={inputTask !== "" ? handleButton : alertNoTask}
        type="submit"
        className="submitButton"
      >
        ADD NEW TASK
      </button>
      <div className="taskList">
        {task.map((item, i) => {
          return (
            <div key={"main" + i} className="myList">
              <h1 key={i}>{item.taskName}</h1>
              <button
                className="deleteButton"
                key={i + 999}
                onClick={() => {
                  deleteTask(item.id);
                }}
                style={{
                  height: "30px",
                  width: "30px",

                  borderRadius: "50%",
                  backgroundColor: "transparent",
                  border: "0.5px solid red",
                  color: "#fff",
                  fontSize: "16px"
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
