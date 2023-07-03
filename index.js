const { createStore, applyMiddleware } = require("redux");
const { delayMiddleware, fetchLoadedMiddleware } = require("./middleware");
const { fetchFunction } = require("./fetchfuntion");


//initial state
const initialState = {
    todos: []
};

//create reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/addedTodo":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                    }
                ]
            };

        case "todos/todosLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            };

        default:
            break;
    }
};

//store
const store = createStore(
    todoReducer,
    applyMiddleware(delayMiddleware, fetchLoadedMiddleware)
);
//subscribe to state manager
store.subscribe(() => {
    console.log(store.getState());
});

//dispatch actions
store.dispatch(fetchFunction);
