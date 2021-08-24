import React, { useState } from "react";
import NewToDo from "./Components/NewToDo";
import todo from "./Components/ToDoList";
import ToDoList from "./Components/ToDoList";
import { ToDo } from "./ToDo.model";

const App: React.FunctionComponent = () => {
  const [todos, setToDo] = useState<ToDo[]>([]);

  const toDoDeleteEventHandler = (todoId: string) => {
    setToDo((previousToDos) => {
      return previousToDos.filter((todo) => todo.id !== todoId);
    });
  };

  const toDoAddEventHandler = (text: string) => {
    setToDo((prevToDos) => [
      ...prevToDos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <NewToDo onAddToDo={toDoAddEventHandler} />
      <ToDoList items={todos} onDelete={toDoDeleteEventHandler} />
    </div>
  );
};

export default App;
