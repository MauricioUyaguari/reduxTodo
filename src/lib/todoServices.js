

export const getTodos = () => {
    return fetch('http://localhost:8090/todos').then(res => res.json().catch(e => console.log(e));

}