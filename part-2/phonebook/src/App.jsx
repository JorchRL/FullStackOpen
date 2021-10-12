import React, { useEffect, useState } from "react";
import axios from "axios";
// import Debug from "./components/Debug";
import NumberList from "./components/NumberList";
import PhoneBookForm from "./components/PhoneBookForm";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [personDisplay, setPersonDisplay] = useState(persons);

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((resp) => {
            setPersons(resp.data);
            setPersonDisplay(resp.data);
            // console.log(resp.data);
        });
    }, []);

    // console.log(persons);

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

        if (hasName) {
            alert(`${event.target[0].value} is already on the phonebook!`);
        } else if (!includesNumber || !includesName) {
            if (!includesNumber) {
                alert(`Please include ${addedName.name}'s number'`);
            } else {
                alert(`Please enter a name`);
            }
        } else {
            setPersons(persons.concat(addedName));
            setPersonDisplay(persons.concat(addedName));
        }

        event.target[0].value = "";
        event.target[1].value = "";
        console.log(persons);
    };

    const handleFilterPersons = (filteredPersons) => {
        // Our FilterPersons component will handle all the filtering logic,
        // but it will not change the state. Instead, it sends a filtered copy of persons
        // setPersons(filteredPersons);
        // console.log("event value: ", filteredPersons);

        setPersonDisplay(filteredPersons);
    };

    return (
        <>
            <h2>Phonebook</h2>
            <FilterPersons personList={persons} handler={handleFilterPersons} />
            <PhoneBookForm addNameHandler={handleAddName} />
            <NumberList personList={personDisplay} />
        </>
    );
};

export default App;

/**
 * Problem with the filtering solution:
 * If we mutate the persons state (via setPersons) in the App component when filtering, we are
 * loosing information. Thus, we should actually use two state objects for persons: one for adding names,
 * and one for displaying and filtering. This means that we will have to refactor the props
 * givent to the NumberList component so that it displays the "filtering" list when there are filter queries
 * and the "database" list when there is no query, so it displays every name in such case.
 */

const FilterPersons = ({ personList, handler }) => {
    const handleFilter = (event) => {
        event.preventDefault();

        const filteredPersons = personList.filter((person) => {
            // Only filter when there is a query
            if (event.target.value === "") {
                return true;
            }
            const regex = RegExp(`^${event.target.value}`, "i");
            // console.log(regex);
            return regex.test(person.name);
        });

        // console.log(filteredPersons);

        handler(filteredPersons);
    };

    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                filter shown with: <input onChange={handleFilter}></input>
            </form>
        </div>
    );
};
