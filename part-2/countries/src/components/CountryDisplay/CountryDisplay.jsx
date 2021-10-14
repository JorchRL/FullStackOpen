import React from "react";
import "./CountryDisplay.css";

const CountryDisplay = ({ name, flag, capital, population, languages }) => {
    // console.log(languages);
    return (
        <div className='Dcontainer'>
            <h3 id='Dname'>{name}</h3>
            <p id='Dcapital'>Capital city: {capital}</p>
            <p id='Dpopulation'>Population: {population}</p>

            <h4>Languages</h4>
            <ul>
                {languages.map((lang) => {
                    return <li key={lang.name}>{lang.name}</li>;
                })}
            </ul>
            <img src={flag} id='Dflag' />
        </div>
    );
};

export default CountryDisplay;
