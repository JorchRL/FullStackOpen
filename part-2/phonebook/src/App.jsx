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

        // Check inputs for this handler
        // console.log([...event.target].map((t) => t.id));

        const addedName = {
            name: event.target[0].value,
            number: event.target[1].value,
            id: persons.length + 1,
        };

        // console.log(event.target[0].value);
        const hasName = persons.find(({ name }) => name === event.target[0].value) !== undefined ? true : false;
        const includesNumber = addedName.number !== "" ? true : false;
        const includesName = addedName.name !== "" ? true : false;
        // console.log(persons.find(({ name }) => name === event.target[0].value));
        // console.log(`hasName`, hasName);

        // console.log(hasName);
        hasName ? alert(`${event.target[0].value} is already on the phonebook!`) : !includesNumber ? alert(`Please include ${event.target[0].value}'s phone number!'`) : !includesName ? alert(`Please specify the name!`) : setPersons(persons.concat(addedName));

        event.target[0].value = "";
        event.target[1].value = "";
        console.log(persons);
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
