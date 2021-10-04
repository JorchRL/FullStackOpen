import React, { useState } from "react";
// import Debug from "./components/Debug";
import NumberList from "./components/NumberList";
import PhoneBookForm from "./components/PhoneBookForm";

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: "Pelos elGato",
            id: 1,
        },
        {
            name: "Vaca Panquesina",
            id: 2,
        },
        {
            name: "Pirri Otota",
            id: 3,
        },
        {
            name: "Pinky Winky",
            id: 4,
        },
        {
            name: "Rusty Totoshka",
            id: 5,
        },
        {
            name: "Patiti Pulgosa",
            id: 6,
        },
    ]);

    const handleAddName = (event) => {
        event.preventDefault();
        const addedName = {
            name: event.target[0].value,
            id: persons.length + 1,
        };

        setPersons(persons.concat(addedName));
        event.target[0].value = "";
    };

    return (
        <>
            <h2>Phonebook</h2>
            <PhoneBookForm addNameHandler={handleAddName} />
            <NumberList personList={persons} />
        </>
    );
};

export default App;
