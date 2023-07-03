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
    if (typeof action === "function") {
        return action(store.dispatch, store.getState)
    }
    return next(action);
};

module.exports = {
    delayMiddleware,
    fetchLoadedMiddleware,
};

