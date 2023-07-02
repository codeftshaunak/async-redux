const { createStore, applyMiddleware } = require("redux");

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

        case "todos/todoLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            };

        default:
            break;
    }
};

//store
const store = createStore(todoReducer, applyMiddleware);

//subscribe to state manager
store.subscribe(() => {
    console.log(store.getState());
});

//dispatch actions
store.dispatch({
    type: "todos/addedTodo",
    payload: "Hello This Is Dispatch"
})