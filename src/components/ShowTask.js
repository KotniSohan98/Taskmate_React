import React from "react";

const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  //   const tasks = [
  //     { id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030" },
  //     { id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030" },
  //     { id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030" },
  //   ];

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    // console.log(selectedTask);
    setTask(selectedTask);
  };
  const handleDelete = (id) => {
    // console.log(id);
    const updatedTaskList = tasklist.filter((todoId) => todoId.id !== id);
    setTasklist(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button
          className="clearAll"
          onClick={() => {
            setTasklist([]);
          }}
        >
          Clear ALl
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
