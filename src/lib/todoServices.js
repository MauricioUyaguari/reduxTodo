
export const getTodos = () => {
    return fetch('http://localhost:8090/todos').then(res => res.json());
}

export const createTodo = (name) => {
    return fetch('http://localhost:8090/todos', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
}
    ).then(res => res.json());
}

export const updateTodo = (todo) => {
    return fetch(`http://localhost:8090/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
}
    ).then(res => res.json());
}

export const destroyTodo = (todo) => {
    return fetch(`http://localhost:8090/todos/${todo.id}`, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
}
    )
}