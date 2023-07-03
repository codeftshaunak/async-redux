const fetch = require('node-fetch');

const fetchFunction = async(dispatch, getState)=>{
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=6'
    );
    const todos = await response.json();

    dispatch({
        type: "todos/todosLoaded", 
        payload: todos,
    });

    console.log(`number of updated todos ${getState().todos.length}`);
}

module.exports={
    fetchFunction,
}