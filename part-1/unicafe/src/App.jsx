import React, { useState, useEffect } from "react";

const Statistics = ({ reviews }) => {
    const { good, neutral, bad } = reviews;

    // We no longer need a stats state as the component will re-render
    // when the props are updated by its parent!
    const all = good + bad + neutral;
    const score = good - bad;
    const average = all !== 0 ? score / all : 0;

    const positive = all !== 0 ? (good / all) * 100 : 0;

    return (
        <>
            <h2>Statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </>
    );
};

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
            <Statistics reviews={{ good: good, neutral: neutral, bad: bad }} />
        </>
    );
};

export default App;
