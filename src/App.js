import React, { Component } from "react";
import "./App.css";
import infoImage from "./images/info.svg";

const CountPresenter = props => {
  return (
    <div className="count-presenter">
      <h4>{props.title}</h4>
      <h2>{props.val}</h2>
    </div>
  );
};
const CountButtons = ({ text, inc, property }) => {
  return (
    <div className="count-btns">
      <h4>{text}</h4>
      <button className="btn btn-info" onClick={inc.bind(this, property, "+")}>
        +
      </button>
      <button className="btn btn-info" onClick={inc.bind(this, property, "-")}>
        -
      </button>
      <button className="btn btn-info" onClick={inc.bind(this, property, "c")}>
        C
      </button>
    </div>
  );
};
const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      <h2>All Todo's</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

class NewTodo extends React.Component {
  state = { newTodo: "" };
  handleSubmit = evt => {
    this.props.addTodo(this.state.newTodo);
    evt.preventDefault();
  };
  onChange = evt => this.setState({ newTodo: evt.target.value });

  render() {
    return (
      <React.Fragment>
        <h4>{this.props.title}</h4>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTodo} onChange={this.onChange} />
          <div style={{ marginTop: 5 }}>
            <button className="btn btn-info">Save</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

class App extends Component {
  state = {
    todos: ["Wake up", "Make Coffee", "Drink Coffee"],
    count1: 0,
    count2: 3,
    showInfo: false //To really a part of the demo
  };

  incrementCounter = (counterToIncrement, whatToDo) => {
    if (whatToDo === "+") {
      this.setState(state => (state[counterToIncrement] += 1));
    } else if (whatToDo === "-") {
      this.setState(state => (state[counterToIncrement] -= 1));
    } else {
      this.setState(state => (state[counterToIncrement] = 0));
    }
  };

  addTodo = todo => {
    //const newList = JSON.parse(JSON.stringify(this.state.todos));
    const newList = this.state.todos.concat([todo]);
    this.setState({ todos: newList });
  };

  render() {
    return (
      <div className="container outer">
        <h2 style={{ textAlign: "center" }}>
          Props and Lifting State Demo
          <span style={{ fontSize: 12 }}>
            <input
              checked={this.state.showInfo}
              onChange={e => this.setState({ showInfo: e.target.checked })}
              type="checkbox"
            />
            Show info
          </span>
        </h2>
        <div className="row" style={{ paddingTop: 25 }}>
          <div className="col-4 allTodos">
            <TodoList todos={this.state.todos} />
          </div>
          <div className="col-2">
            <CountPresenter title="Counter-1" val={this.state.count1} />
            <CountPresenter title="Counter-2" val={this.state.count2} />
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-5 count-btn">
                <CountButtons
                  text="Counter 1"
                  property="count1"
                  inc={this.incrementCounter}
                />
                <br />
                <CountButtons
                  text="Counter 2"
                  property="count2"
                  inc={this.incrementCounter}
                />
              </div>
              <div className="col-7 new-todo">
                <NewTodo title="New Todo" addTodo={this.addTodo} />
              </div>
            </div>
          </div>
        </div>
        <div>
          {this.state.showInfo && <img src={infoImage} className="center-img" alt="infoImage" />}
        </div>
      </div>
    );
  }
}

export default App;
