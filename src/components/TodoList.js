import React, {useState} from "react";

const TodoList = () => {

    const [list, setList] = useState([]);

    const formatTask = (list) => {
        return list.taskName;
    };

    const handleAddTask = () => {
        const taskName = document.querySelector('#taskName').value;

        const newTask = {
            taskName
        };

        setList((prevState) => {
            return [
                ...prevState,
                newTask
            ];
        });
    };

    const handleDeleteTask = (index) => {
        setList((prevState) => {
            return prevState.filter((task, i) => i !== index);
        });
    };

    return (
        <>

            <div>
                <label htmlFor='taskName'>Tarea</label>
                <input type='text' id='taskName'/>

                <button onClick={handleAddTask}>Agregar</button>
            </div>
            <ul>
                {
                    list.map((list, index) => (
                        <li key={`list-${index}`}>{formatTask(list)}
                            &nbsp;
                            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )

}

export default TodoList;