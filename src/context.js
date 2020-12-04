import React from 'react'

const todoContext = React.createContext({
    todos: [
        {id: 1, text: "Wakeup", status: "Pending"},
        {id: 2, text: "Eat", status: "Pending"},
        {id: 3, text: "Sleep", status: "Pending"},
    ],
    currentTodo : {}
})   //Creating initial state via createContext

export default todoContext;