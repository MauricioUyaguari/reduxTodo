import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            React-Redux App
          </h2>
        </header>
        <div className="Todo-App">
          <TodoForm/>
          <TodoList/>
        </div> 

      </div>
    );
  }
}



export default App

