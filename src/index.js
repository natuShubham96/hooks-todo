import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const UserInfo = React.createContext(); //creating context, to be used for passing down values to children components
//createContext provides 2 values, Provider and consumer which is used to fetch passed value in child component

const userName = "Dave"

ReactDOM.render(
  <React.StrictMode>
    <UserInfo.Provider value={userName}> 
    <App />
    </UserInfo.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
