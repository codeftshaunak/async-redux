const delaymiddleware = (store)=>(next)=>(action)=>{
    if(action.type==="todos/addedTodo"){
        console.log("I am delaing you");

        setTimeout(() => {
            next(action);
        }, 2000);
    }
    return next(action)
}