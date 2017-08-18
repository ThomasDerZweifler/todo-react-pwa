import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class TodoItems extends React.Component {
  render() {
    var todoEntries = this.props.entries;
    let itemStyle = {
      listStyle: "none",
      fontSize: "16px",
      backgroundColor: "#ECE8EF",
      margin: "15px",
      padding: "15px"
    };

    function createTasks(item) {
      return (
        <li style={itemStyle} key={item.key}>
          {item.text}
        </li>
      );
    }
    var listItems = todoEntries.map(createTasks);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

class TodoList extends React.Component {
  state = {
    items: []
  };

  addItem = e => {
    const itemArray = this.state.items;

    itemArray.push({
      text: this._inputElement.value,
      key: Date.now()
    });

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";
    e.preventDefault();
  };

  render() {
    let defaultStyle = {
      padding: "15px",
      fontSize: "16px",
      border: "2px solid #ECE8EF",
      margin: "5px"
    };
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <label>
              Zu erledigen:{" "}
              <input style={defaultStyle} ref={input => (this._inputElement = input)} />
            </label>
            <button style={defaultStyle} type="submit">
              Hinzufügen
            </button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Zu erledigen</h2>
        </div>
        <div className="App-intro">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;