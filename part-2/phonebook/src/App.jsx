import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Debug from "./components/Debug";
import NumberList from "./components/NumberList";
import PhoneBookForm from "./components/PhoneBookForm";
import phoneBookService from "./services/phonebook";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [personDisplay, setPersonDisplay] = useState(persons);

    useEffect(() => {
        // axios.get("http://localhost:3001/persons")
        phoneBookService.getAllNumbers().then((numbers) => {
            setPersons(numbers);
            setPersonDisplay(numbers);
            // console.log(resp.data);
        });
    }, []);

    const handleAddName = (event) => {
        event.preventDefault();

        const addedName = {
            name: event.target[0].value,
            number: event.target[1].value,
            // id: persons.length + 1,
        };

        // Validate our input
        const hasName = persons.find(({ name }) => name === event.target[0].value) !== undefined ? true : false;
        const includesNumber = addedName.number !== "" ? true : false;
        const includesName = addedName.name !== "" ? true : false;
        if (hasName) {
            // Here we want to check wheter the user wishes to update the existing name
            if (window.confirm(`${event.target[0].value} is already on the phonebook. Do you want to update their number?`)) {
                const updateId = persons.filter((p) => {
                    return p.name === addedName.name;
                })[0].id;

                setPersons(persons.filter((p) => p.id !== updateId));

                setPersonDisplay(personDisplay.filter((p) => p.id !== updateId));

                phoneBookService.updateNumber(addedName, updateId).then((updatedPerson) => {
                    setPersons(persons.filter((p) => p.id !== updateId).concat(updatedPerson));
                    setPersonDisplay(personDisplay.filter((p) => p.id !== updateId).concat(updatedPerson));
                });
            }
        } else if (!includesNumber || !includesName) {
            if (!includesNumber) {
                alert(`Please include ${addedName.name}'s number'`);
            } else {
                alert(`Please enter a name`);
            }
        } else {
            phoneBookService.addNumber(addedName).then((returnedName) => {
                setPersons(persons.concat(returnedName));
                setPersonDisplay(personDisplay.concat(returnedName));
            });
        }

        event.target[0].value = "";
        event.target[1].value = "";
        // console.log(persons);
    };

    const handleDeleteNumber = (id) => {
        if (window.confirm(`Delete ${persons.find((p) => p.id === id).name}?`)) {
            phoneBookService.deleteNumber(id).then((response) => {
                const newPersonsList = persons.filter((p) => {
                    return p.id !== id;
                });
                setPersons(newPersonsList);
                setPersonDisplay(newPersonsList);
            });
        }
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
            <NumberList personList={personDisplay} deleteHandler={handleDeleteNumber} />
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
            const regex = RegExp(`${event.target.value}`, "i");
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
