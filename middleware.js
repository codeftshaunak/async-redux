const fetch = require('node-fetch');

const delayMiddleware = (store) => (next) => (action) => {
    if (action.type === "todos/addedTodo") {
        console.log("I am delaying you");

        setTimeout(() => {
            next(action);
        }, 2000);

        return;
    }
    return next(action);
};

const fetchLoadedMiddleware = (store) => (next) => async (action) => {
    if (action.type === "todos/fetchLoaded") {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos?_limit=6'
        );
        const todos = await response.json();

        store.dispatch({
            type: "todos/todosLoaded", // corrected typo in "type"
            payload: todos,
        });

        return;
    }
    return next(action);
};

module.exports = {
    delayMiddleware,
    fetchLoadedMiddleware,
};
