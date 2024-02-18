import React from "react";

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  function handleSubmit(e) {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updatedTasklist);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      // console.log(e);
      // console.log(newTask.id, newTask.name, newTask.time);
      setTasklist([...tasklist, newTask]);
      //   e.target.task.value = "";
      setTask({});
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add Task"}</button>
      </form>
    </section>
  );
};

export default AddTask;
