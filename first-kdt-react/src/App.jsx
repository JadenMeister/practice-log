import React, { useState } from 'react';

function NameList() {
    const [inputValue, setInputValue] = useState('');
    const [names, setNames] = useState([]);

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            setNames([...names, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h2>Name List</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default NameList;
