import React, { useState } from "react";
import Debug from "./Debug";

const PhoneBookForm = ({ addNameHandler }) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const handleInputChange = (event) => {
        // console.log(event.target);
        event.target.id === "name-input" && setNewName(event.target.value);
        event.target.id === "number-input" && setNewNumber(event.target.value);
    };

    const debugVars = [
        {
            name: "newName",
            val: newName,
        },
        {
            name: "newNumber",
            val: newNumber,
        },
    ];

    return (
        <div>
            {/* <Debug vars={debugVars} /> */}
            <h2>Add new</h2>
            <form onSubmit={addNameHandler}>
                <div>
                    name: <input id='name-input' onChange={handleInputChange} type='text' placeholder='Add a new name...' />
                    <br />
                    number: <input id='number-input' onChange={handleInputChange} type='text' placeholder='Add a new number...' />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
        </div>
    );
};

export default PhoneBookForm;
