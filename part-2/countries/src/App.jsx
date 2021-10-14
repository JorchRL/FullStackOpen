import React, { useState, useEffect } from "react";
import axios from "axios";
import latinize from "latinize";
import "normalize.css";
import "./App.css";
import CountryCard from "./components/country/CountryCard";
import CountryDisplay from "./components/CountryDisplay/CountryDisplay";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [countriesDisplay, setCountriesDisplay] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then((resp) => {
            setCountries(resp.data);
            setCountriesDisplay(resp.data);
        });
    }, []);

    const handleSearch = (event) => {
        // event.preventDefault();
        // console.log(event.target.value);
        setSearchQuery(event.target.value);

        setCountriesDisplay(
            countries.filter((country) => {
                if (event.target.value === "") {
                    return true;
                }
                // console.log(event.target.value);
                const regex = RegExp(`^${event.target.value}`, "i");
                return regex.test(latinize(country.name));
            })
        );
    };

    const handleClickContryCard = (i) => {
        // This handler sets the country display array to the single country whose card was clicked
        // 1 get the coutry object
        // use setCountriesDisplay() to have a single display country
        // use setSearchQuery() to set the query to the country's name (???)
        // console.log(`Clicked country`, countriesDisplay[i].name);
        handleSearch({ target: { value: countriesDisplay[i].name } });
    };

    return (
        <div className='App'>
            <h1>Countries of the world</h1>
            <input onChange={handleSearch} type='text' placeholder='Search for a country...' />
            {/* <DebugVars vars={{ query: searchQuery, results: countriesDisplay.length }} /> */}
            {countriesDisplay.length === 1 && <CountryDisplay name={countriesDisplay[0].name} capital={countriesDisplay[0].capital} population={countriesDisplay[0].population} flag={countriesDisplay[0].flags.svg} languages={countriesDisplay[0].languages} />}

            {countriesDisplay.length <= 25 && countriesDisplay.length > 1 ? (
                <ul>
                    {countriesDisplay.map((country, index) => {
                        const flag = country.flags.svg !== undefined ? country.flags.svg : country.flags.png;
                        return <CountryCard key={country.name} name={country.name} flag={flag} index={index} clickHandler={handleClickContryCard} />;
                    })}
                    {/* {countries[144] && <Country name={countries[144].name} flag={countries[144].flags.svg} />} */}
                </ul>
            ) : (
                countriesDisplay.length > 25 && searchQuery !== "" && <h4>Too many results ({countriesDisplay.length}). Please narrow down your search</h4>
            )}

            {countriesDisplay.length === 0 && <h4>No country matches your search {":("}</h4>}
        </div>
    );
};

const CountryDisplayDEBUG = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        console.log("Requesting country data");
        axios.get("https://restcountries.com/v2/name/mexico").then((resp) => {
            console.log(resp.data[0]);
            setCountry(resp.data[0]);
        });
    }, []);

    // console.log(country.flags);

    // useEffect ALWAYS happens after the first rendering, but we need the request data here. So, we add a simple
    // check in order to actually use the data on the second render, after useEffect() is done...
    return <div className='App'>{country.length !== 0 && <CountryDisplay name={country.name} population={country.population} languages={country.languages} capital={country.capital} flag={country.flags.svg} />}</div>;
    // return <h1>Hola</h1>;
};

export default App;
export { CountryDisplayDEBUG };

const DebugVars = ({ vars }) => {
    const { query, results } = vars;
    return (
        <div style={{ fontSize: "5px" }}>
            <p>Search: {query !== "" ? query : "no search"}</p>
            <p>Results: {results}</p>
        </div>
    );
};
