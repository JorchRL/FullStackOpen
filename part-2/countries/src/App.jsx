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

                const regex = RegExp(`^${event.target.value}`, "i");
                return regex.test(latinize(country.name));
            })
        );
    };

    return (
        <div className='App'>
            <h1>Countries of the world</h1>
            <input onChange={handleSearch} type='text' placeholder='Search for a country...' />
            {/* <DebugVars vars={{ query: searchQuery, results: countriesDisplay.length }} /> */}
            {countriesDisplay.length === 1 && <CountryDisplay name={countriesDisplay[0].name} capital={countriesDisplay[0].capital} population={countriesDisplay[0].population} flag={countriesDisplay[0].flags.svg} languages={countriesDisplay[0].languages} />}

            {countriesDisplay.length <= 25 && countriesDisplay.length > 1 ? (
                <ul>
                    {countriesDisplay.map((country) => {
                        const flag = country.flags.svg !== undefined ? country.flags.svg : country.flags.png;
                        return <CountryCard key={country.name} name={country.name} flag={flag} />;
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

export default App;

const DebugVars = ({ vars }) => {
    const { query, results } = vars;
    return (
        <div style={{ fontSize: "5px" }}>
            <p>Search: {query !== "" ? query : "no search"}</p>
            <p>Results: {results}</p>
        </div>
    );
};
