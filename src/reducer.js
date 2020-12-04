
export default function todoReducer (state, action) {
    switch(action.type) {
        case "TOGGLE_TODO" : 
        const updatedStatus = action.payload.status === "Pending"? "Completed" : "Pending"
        const todo =  state.todos.map(t => t.id === action.payload.id? {...action.payload, status: updatedStatus} : t)
        return {...state,todos: todo}
        default:
            return state;
    }
}