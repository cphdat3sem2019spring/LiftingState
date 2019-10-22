import React, {useState} from "react";
import "./App.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import infoImage from "./images/infoTodoEdit.svg";
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), todoText: "Wake up" },
    { id: uuid(), todoText: "Make Coffee" },
    { id: uuid(), todoText: "Drink Coffee" }
  ]
  const [todos, setTodos] = useState(initialData);
  const [showInfo, setShowInfo] = useState(false);
  const [newTodo, setNewTodo] = useState({ id: -1, todoText: "" });
  console.log(todos)

  const addTodo = todo => {
    if (todo.id === -1) { // id=-1 Indicates a new object
      todo.id = uuid();
      todos.push(todo);
    } else {//if id != -1, it must be an existing todo, with an id. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setTodos([...todos]);
    setNewTodo({id:-1,todoText:""})
  };
  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center" }}>
        Props and Lifting State Demo
        <span style={{ fontSize: 12 }}>
          <input
            checked={showInfo}
            onChange={e => setShowInfo(e.target.checked) }
            type="checkbox"
          />
          Show info
        </span>
      </h2>
      <div className="row" style={{ paddingTop: 25 }}>
        <div className="col-6 allTodos">
          <TodoList todos={todos} />
        </div>
        <div className="col-5 new-todo">
          <NewTodo
            title="New Todo"
            addTodo={addTodo}
            nextTodo={newTodo}
            keya={newTodo.id}
          />
        </div>
      </div>

      <div>
        {showInfo && (
          <img src={infoImage} className="center-img" alt="infoImage" />
        )}
      </div>
    </div>
  );
}
export default App;
