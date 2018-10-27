import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
// const state = {
//     todos: [
//         {id: 1, name: "Render Static UI", isComplete: true},
//         {id: 2, name: "Create Initial UI", isComplete: true},
//         {id: 3, name: "Render Static UI", isComplete: false}
//     ]
// }

const state = store.getState();

ReactDOM.render(<App {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
