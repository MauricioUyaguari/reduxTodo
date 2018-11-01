import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
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
          <Message />
          <TodoList/>
        </div> 

      </div>
    );
  }
}



export default App

