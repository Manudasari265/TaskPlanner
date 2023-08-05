import { useState } from "react";
import './TodoInput.css';
import MaterialIcon  from 'material-icons-react';

// eslint-disable-next-line react/prop-types
export default function TodoInput({ onAddItem }) {
    var [currentInput, setCurerentInput] = useState('');

    function onInputChange(event) {
        setCurerentInput(event.target.value)
    }

    function addTodoItem() {
        onAddItem(currentInput);
        setCurerentInput('');

    }


    return (
        <div className='todo-input-div'>
            <input className='todo-input' type="text" value={currentInput} onChange={onInputChange} />
            <button className='todo-input-add' onClick={addTodoItem}>
                <MaterialIcon icon='add' color='black' />
                Add
            </button>
        </div>
    )
}