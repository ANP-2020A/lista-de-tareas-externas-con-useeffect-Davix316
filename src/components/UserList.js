import React, {useState} from "react";

const UserList = () =>{
    const superCompleja = () => {
        console.log( 'Calculos super complejos');

        return [
            {
                firstName: 'David',
                lastName: 'Curipoma'
            },
            {
                firstName: 'Victoria',
                lastName: 'Mediavilla'
            },
            {
                firstName: 'Juan',
                lastName: 'Perez'
            }
        ];
    };

    //Asignacion desestructurante(extraye elementos de arreglo y asigna a variable)
    const [users, setUsers ] = useState(superCompleja);
    const [count, setCount ] = useState(0);

    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    };

    const handleAddUser = () => {
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;

        const newUser = {
            firstName,
            lastName
        };

        setUsers((prevState)=>{
            return [
                ...prevState,
                newUser
            ];
        });
    };

    return (
        <>
            { count }
            <button onClick={() => setCount(count + 1)}>Sumar</button>
            <button onClick={() => setCount(0)}>Resetear</button>

            <div>
                <label htmlFor='fistName'>Nombre</label>
                <input type='text' id='firstName' />

                <label htmlFor='lastName'>Apellido</label>
                <input type='text' id='lastName' />

                <button onClick={handleAddUser}>Agregar</button>
            </div>

            <ul>
                {
                    users.map((user, index)=> {
                        return <li key={ `user-${ index }` }>{formatName( user ) }</li>;
                    })
                }
            </ul>
        </>
    )
}

export default UserList;