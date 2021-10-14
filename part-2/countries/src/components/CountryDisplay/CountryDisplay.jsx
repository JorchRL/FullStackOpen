import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CountryDisplay.css";

const CountryDisplay = ({ name, flag, capital, population, languages }) => {
    // const [capitalWeather, setCapitalWeather] = useState(0);

    // const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=New York`;

    // useEffect(() => {
    //     axios.get(weatherURL).then((resp) => {
    //         // setCapitalWeather(resp.data);
    //         console.log(resp.data);
    //     });
    // }, []);

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
            <img src={flag} alt={`Flag of ${name}`} id='Dflag' />
        </div>
    );
};

export default CountryDisplay;
