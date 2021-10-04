import React from "react";

const NumberList = ({ personList }) => {
    // console.log(personList);
    return (
        <div className='NumberList'>
            <h2>Numbers</h2>
            <ul>
                {personList.map((person) => {
                    return <li key={person.id}>{person.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default NumberList;
