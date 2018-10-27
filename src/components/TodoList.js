import React from 'react';

const TodoItem = ({id, name, isComplete}) => (
    <li> 
    <input type="checkbox" defaultChecked={isComplete}/>
    {name}
   </li>
)



export default(props) => (
    
    <div>
        <ul> 
        {
        props.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
        
        }
        </ul>
    </div>


)