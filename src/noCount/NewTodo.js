import React, {useState,useEffect} from 'react';

function NewTodo(props) {
  const [todo,setTodo] = useState(props.nextTodo);

  const handleSubmit = evt => {
    if (todo.todoText === "") {
      return;
    }
   props.addTodo(todo);
    evt.preventDefault();
  };
  
  useEffect(()=>setTodo({...props.nextTodo}),[props.nextTodo])

  const onChange = evt => {
    const val = evt.target.value;
    todo.todoText = val;
    setTodo({...todo});
  };

 
    return (
      <div>
        <h4>{props.title}</h4>
        <form onSubmit={handleSubmit}>
          <input value={todo.todoText} onChange={onChange} />
          <div style={{ marginTop: 5 }}>
            <button className="btn btn-info">Save</button>
          </div>
        </form>
        {todo.id >= 0 && (
          <p>Editing todo with id {todo.id}</p>
        )}
      </div>
    )
}
export default NewTodo;
