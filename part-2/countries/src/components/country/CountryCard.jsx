import React from "react";
import "./CountryCard.css";
// import latinize from "latinize";

const CountryCard = ({ name, flag }) => {
    return (
        <div className='container' href='#App'>
            <p id='name'>{name}</p>
            <br />
            {/* <p id='norm'>{latinize(name)}</p> */}
            <img id='flag' src={flag} alt={`flag of ${name}`} />
        </div>
    );
};

export default CountryCard;
