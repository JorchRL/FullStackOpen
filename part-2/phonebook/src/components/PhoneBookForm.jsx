import React, { useState } from "react";
import Debug from "./Debug";

const PhoneBookForm = ({ addNameHandler }) => {
    const [newName, setNewName] = useState("");

    const handleInputChange = (event) => {
        setNewName(event.target.value);
    };

    const debugVars = [
        {
            name: "newName",
            val: newName,
        },
    ];

    return (
        <div>
            <Debug vars={debugVars} />
            <form onSubmit={addNameHandler}>
                <div>
                    name: <input onChange={handleInputChange} type='text' placeholder='Add a new name...' />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
        </div>
    );
};

export default PhoneBookForm;
