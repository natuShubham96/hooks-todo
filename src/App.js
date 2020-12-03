
import {useContext,useReducer} from 'react'
import {UserInfo} from './index'

const initialState = {
    count: 0
}

const reducer = (state,action) => {
    switch(action.type) {
        case "increment" : 
        return {count: state.count + 1 }
        case "decrement" :
            return {count: state.count - 1}
        case "reset" :
            return initialState
        default : 
        return initialState
    }
}

export default function App () {
    const [state,dispatch] = useReducer(reducer,initialState)  //useReducer provides with updated state and dispatch function, used to dispatch action
    const value = useContext(UserInfo)

    return (
        //Without using hooks
        // <UserInfo.Consumer>   
        //     {value => <div>Hello, {value}</div>}  
        // </UserInfo.Consumer> // Using consumer we need to pass in a render props function

        //With hooks
        <>

        <div>Hello,  {value}</div>

        <div>
            count: {state.count}
            <button onClick={() => dispatch({ type: "increment"})}>Increment!!!</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement!!!</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset!!!</button>
        </div>
        </>
    )
}