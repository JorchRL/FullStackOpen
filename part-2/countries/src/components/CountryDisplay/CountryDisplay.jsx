import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CountryDisplay.css";

const CountryDisplay = ({ name, flag, capital, population, languages }) => {
    const [capitalWeather, setCapitalWeather] = useState([]);

    // console.log(process.env);

    const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${name}`;

    useEffect(() => {
        // console.log(weatherURL);
        axios({
            method: "GET",
            url: weatherURL,
        }).then((resp) => {
            setCapitalWeather(resp.data.current);
            // console.log(resp.data.current);
        });
    }, []);

    return (
        <div className='Dcontainer'>
            {capitalWeather.temperature !== undefined && (
                <>
                    <div className='Dinfo'>
                        <div className='info'>
                            <h3 id='Dname'>{name}</h3>
                            <p id='Dcapital'>Capital city: {capital}</p>
                            <p id='Dpopulation'>Population: {population}</p>

                            <h4>Languages</h4>
                            <ul>
                                {languages.map((lang) => {
                                    return <li key={lang.name}>{lang.name}</li>;
                                })}
                            </ul>
                        </div>
                        <div className='weather'>
                            <h3>{`Weather in ${capital}`}</h3>
                            <img src={capitalWeather.weather_icons[0]} alt='' />
                            <p>
                                Tempearture: <br /> {capitalWeather.temperature} celsius{" "}
                            </p>
                            <p>
                                Wind: <br /> {capitalWeather.wind_speed} km/hr, dir: {capitalWeather.wind_dir}{" "}
                            </p>
                        </div>
                    </div>
                    <h3 className='info'>{`${name}'s flag`}</h3>
                    <div id='Dflag'>
                        <img src={flag} alt={`Flag of ${name}`} />
                    </div>{" "}
                </>
            )}
        </div>
    );
};

export default CountryDisplay;
