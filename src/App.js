import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';

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
        <Router >
          <div className="Todo-App">
          <Message />
            <TodoForm/>
           <Route path='/:filter?' render={
             ({match}) => (
              <TodoList filter={match.params.filter}/>
             )} />
           
            <Footer />
          </div> 
        </Router >
      </div>
    );
  }
}



export default App

