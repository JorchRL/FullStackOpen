import React from "react";
import "./CountryCard.css";
// import latinize from "latinize";

const CountryCard = ({ name, flag, clickHandler, index }) => {
    return (
        <div className='container' href='#App' onClick={() => clickHandler(index)}>
            <p id='name'>{name}</p>
            <br />
            {/* <p id='norm'>{latinize(name)}</p> */}
            <img id='flag' src={flag} alt={`flag of ${name}`} />
        </div>
    );
};

export default CountryCard;
