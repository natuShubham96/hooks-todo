
import {useContext} from 'react'
import {UserInfo} from './index'

export default function App () {
    const value = useContext(UserInfo)

    return (
        //Without using hooks
        // <UserInfo.Consumer>   
        //     {value => <div>Hello, {value}</div>}  
        // </UserInfo.Consumer> // Using consumer we need to pass in a render props function

        //With hooks

        <div>Hello,  {value}</div>
    )
}