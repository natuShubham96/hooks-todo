import {useContext} from 'react'
import todoContext from '../context'

export default function TodoList () {
    const {state, dispatch} = useContext(todoContext)  //grabbing the state passed via context.provider to child via useContext
    const title = state.todos.length>0? `${state.todos.length} Todos` : "Nothing to do!!!"
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {state.todos.map(todo => 
                    <li key={todo.id}>
                        <span onDoubleClick={() => dispatch({type: "TOGGLE_TODO", payload: todo})}>{todo.text} - {todo.status}</span>
                        <button style={{padding: "20px"}} onClick={() => dispatch({type: "REMOVE_TODO", payload: todo})}>Remove!!!</button>
                        <button onClick={() => dispatch({type: "SET_CURRENT_TODO", payload: todo})}>Edit!!</button>
                    </li>
                )}
            </ul>
        </div>
    )
}