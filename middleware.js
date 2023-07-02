const fetch = require('node-fetch');

const delaymiddleware = (store) => (next) => (action) => {
    if (action.type === "todos/addedTodo") {
        console.log("I am delaing you");

        setTimeout(() => {
            next(action);
        }, 2000);

        return;
    }
    return next(action);
}

const fetchLoadedMiddleware = (store) => (next) => async (action) => {
    if (action.type === "todos/fetchLoaded") {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6');
        const todos = await response.json();

        store.dispatch({
            tpye: "todos/addedTodo",
            payload: todos
        })

        return;
    }
    return next(action);
}

module.exports = {
    delaymiddleware, fetchLoadedMiddleware
}