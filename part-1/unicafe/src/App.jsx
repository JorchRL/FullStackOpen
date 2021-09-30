import React, { useState } from "react";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const getHandler = (val, setVal) => () => setVal(val + 1);

    return (
        <>
            <h2>Give feedback</h2>
            <button onClick={getHandler(good, setGood)}>good</button>
            <button onClick={getHandler(neutral, setNeutral)}>neutral</button>
            <button onClick={getHandler(bad, setBad)}>bad</button>
            <br />
            <h2>Statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </>
    );
};

export default App;
