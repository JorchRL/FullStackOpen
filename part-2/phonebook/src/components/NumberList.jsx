import React from "react";

const NumberList = ({ personList }) => {
    // console.log(personList);
    return (
        <div className='NumberList'>
            <h2>Numbers</h2>
            <ul>
                {personList.map((person) => {
                    return (
                        <li key={person.id}>
                            {console.log(person.number)}
                            {person.name} - {person.number !== undefined ? person.number : <em>"Missing number!"</em>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NumberList;
