import {useState, useEffect, useContext} from 'react'
import todoContext from '../context'

export default function TODOFORM() {
    const [todo, setTodo] = useState("")
    const {state: {currentTodo = {}},dispatch} = useContext(todoContext)

    useEffect(() => {
        if(currentTodo.text) {
            setTodo(currentTodo.text)
        }
        else {
            setTodo("")
        }
    }, [currentTodo.id])  //useEffect used to check if there is any currentTodo available and useEffect will be called only when currentTodo id changes

    const handleSubmit = (event) => {
event.preventDefault();
if(currentTodo.text) {
    dispatch({type: "UPDATE_TODO", payload: todo})
}
else {
dispatch({type: "ADD_TODO", payload: todo})
}
setTodo("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input  type="text"  placeholder="Enter todo here!!" value={todo} onChange={(event) => setTodo(event.target.value)}/>
        </form>
    )
}