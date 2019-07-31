import React, { Component } from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { createTodo } from "./utils/creators";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      filterState: false,
      finishes: [],
      todos:
        JSON.parse(localStorage.getItem("todo")) === null || undefined
          ? []
          : JSON.parse(localStorage.getItem("todo"))
    };

    this._inputRef = React.createRef();

    this.onChangeInputText = this.onChangeInputText.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this);
    this.getCompletedCount = this.getCompletedCount.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleTodoFilter = this.handleTodoFilter.bind(this);
  }

  onChangeInputText(inputValue) {
    this.setState({ inputValue });
    this.todos = JSON.parse(localStorage.getItem("todo"));
  }

  handleAddTodo() {
    const { inputValue } = this.state;
    const todo = createTodo(this.state.inputValue);
    if (inputValue.trim().length === 0) {
      return;
    } else {
      localStorage.setItem("todo", JSON.stringify(this.state.todos));
      this.todos = JSON.parse(localStorage.getItem("todo"));

      this.setState({
        inputValue: "",
        todos: [todo].concat(this.state.todos) // add
      });
    }

    this._inputRef.current.focus();
  }

  handleTodoClick(evt, id) {
    const currentTodoIndex = this.state.todos.findIndex(i => i.id === id);

    if (currentTodoIndex === -1) {
      return;
    }

    const todo = { ...this.state.todos[currentTodoIndex] };
    todo.completed = !todo.completed;
    const newTodos = [...this.state.todos];
    newTodos[currentTodoIndex] = todo;

    this.setState({
      todos: newTodos
    });
  }

  handleTodoRemoveClick(id) {
    this.setState({
      todos: this.state.todos.filter(i => i.id !== id),
      finishes: this.state.finishes.filter(i => i.id !== id)
    });
  }

  getCompletedCount() {
    return this.state.todos.filter(i => i.completed).length;
  }

  handleTodoFilter() {
    if (this.state.filterState === false) {
      this.setState({
        finishes: this.state.todos.filter(i => i.completed === false),

        filterState: true
      });
    } else {
      this.setState({
        filterState: false
      });
    }
  }

  componentDidUpdate() {
    if (JSON.parse(localStorage.getItem("todo")) !== this.state.todos) {
      localStorage.setItem("todo", JSON.stringify(this.state.todos));
    }
  }

  render() {
    return (
      <div className={s.App}>
        <div className={s.container}>
          <Header
            inputRef={this._inputRef}
            value={this.state.inputValue}
            onChangeText={this.onChangeInputText}
            onClick={this.handleAddTodo}
          />
          <div>
            <TodoList
              
              items={
                // this.state.todos
                this.state.filterState ? this.state.finishes : this.state.todos
              }
              onTodoClick={this.handleTodoClick}
              onTodoRemoveClick={this.handleTodoRemoveClick}
            />
          </div>
          <footer>
            <div>
              {" "}
              <button onClick={() => this.handleTodoFilter()}>
                {this.state.filterState ? "Show " : "Hide "}Completed:
                {this.getCompletedCount()}
              </button>
            </div>
            <div>
              Total:
              {this.state.todos.length}
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
