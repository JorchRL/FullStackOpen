import React, { useState, useEffect } from "react";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [stats, setStats] = useState({});

    const getHandler = (val, setVal) => () => setVal(val + 1);

    useEffect(() => {
        const all = good + bad + neutral;
        const score = good - bad;
        const average = all !== 0 ? score / all : 0;

        const positive = all !== 0 ? (good / all) * 100 : 0;

        setStats({
            all: all,
            average: average,
            positive: positive,
        });
    });

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
            <p>all {stats.all}</p>
            <p>average {stats.average}</p>
            <p>positive {stats.positive}%</p>
        </>
    );
};

export default App;
