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

        // console.log(event.target[0].value);
        const hasName = persons.find(({ name }) => name === event.target[0].value) !== undefined ? true : false;
        // console.log(persons.find(({ name }) => name === event.target[0].value));
        // console.log(`hasName`, hasName);

        // console.log(hasName);
        !hasName ? setPersons(persons.concat(addedName)) : alert(`${event.target[0].value} is already on the phonebook!`);
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
