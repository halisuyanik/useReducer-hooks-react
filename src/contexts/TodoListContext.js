import React, {createContext, useReducer} from 'react';
import {todosReducer} from '../reducers/todosReducer';

export const TodoListContext=createContext();

const TodoListContextProvider=({children})=>{
    const[todos, dispatch]=useReducer(todosReducer, [
        {text:'Plan', id:1},
        {text:'go for', id:2},
        {text:'go for a walk', id:3},
    ]);

    return(
        <TodoListContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;