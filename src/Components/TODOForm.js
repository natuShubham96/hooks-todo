import {useState, useContext} from 'react'
import todoContext from '../context'

export default function TODOFORM() {
    const [todo, setTodo] = useState("")
    const {dispatch} = useContext(todoContext)

    const handleSubmit = (event) => {
event.preventDefault();
dispatch({type: "ADD_TODO", payload: todo})
setTodo("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input  type="text"  placeholder="Enter todo here!!" value={todo} onChange={(event) => setTodo(event.target.value)}/>
        </form>
    )
}