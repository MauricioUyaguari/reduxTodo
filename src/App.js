import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <form>
            <input type="text"/>
          </form>
          <div>
            <ul> 
              {
                this.props.todos.map(todo => (
                  <li key={todo.id}> 
                   <input type="checkbox" defaultChecked={todo.isComplete}/>
                   {todo.name}
                  </li>
                )

                )
              }
            </ul>
          </div>
        
        
        
        </div> 

      </div>
    );
  }
}

export default App;
