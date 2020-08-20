import React, {useState} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import UserList from "./UserList";
import TodoList from "./TodoList";


const App = () => (

    <>
        <UserList/>
        <TodoList/>
    </>


);

export default App;

/*class App extends React.Component{

    formatName = ( user ) => {
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        return (
            <>
                <div>
                    ¡Hola {this.formatName( this.props.user)}!
                </div>
                <div>
                    { this.props.question}
                </div>
            </>
        );
    }
}*/