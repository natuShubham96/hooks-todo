import {useContext} from 'react'
import todoContext from '../context'

export default function TodoList () {
    const {state} = useContext(todoContext)  //grabbing the state passed via context.provider to child via useContext

    return (
        <div>
            <ul>
                {state.todos.map(todo => 
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                )}
            </ul>
        </div>
    )
}