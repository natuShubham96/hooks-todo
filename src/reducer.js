import uuidv4 from 'uuid/v4'

export default function todoReducer (state, action) {
    let todos;
    switch(action.type) {
        case "UPDATE_TODO" :
            const updatedTodo = {...state.currentTodo, text: action.payload}
            const updatedTodoIndex = state.todos.findIndex(
                t=> t.id === state.currentTodo.id
            )
             todos = [
               ...state.todos.slice(0,updatedTodoIndex),
               updatedTodo,
               ...state.todos.slice(updatedTodoIndex+1)
            ]
            return {
                ...state,
                todos,
                currentTodo: ""
            }
        case "SET_CURRENT_TODO" :
            return {...state,currentTodo: action.payload}
        case "TOGGLE_TODO" : 
        const updatedStatus = action.payload.status === "Pending"? "Completed" : "Pending"
        const todo =  state.todos.map(t => t.id === action.payload.id? {...action.payload, status: updatedStatus} : t)
        return {...state,todos: todo}
        case "ADD_TODO" :
            const newTODO = {
                id: uuidv4(),
                text: action.payload,
                status: "Pending"
            }
            todos = [...state.todos,newTODO]
            return {...state,todos}
        case "REMOVE_TODO" :
            todos = state.todos.filter(t => t.id !== action.payload.id)
            return {...state, todos}
        default:
            return state;
    }
}