import React, { useState, useEffect } from "react";

const Statistics = ({ reviews }) => {
    const { good, neutral, bad } = reviews;

    // We no longer need a stats state as the component will re-render
    // when the props are updated by its parent!
    const all = good + bad + neutral;
    const score = good - bad;
    const average = all !== 0 ? score / all : 0;
    const positive = all !== 0 ? (good / all) * 100 : 0;

    const hasReviews = all > 0 ? true : false;

    return (
        <>
            <h2>Statistics</h2>
            {hasReviews && (
                <table>
                    <StatisticsLine text={"good"} value={good} />
                    <StatisticsLine text={"neutral"} value={neutral} />
                    <StatisticsLine text={"bad"} value={bad} />
                    <StatisticsLine text={"all"} value={all} />
                    <StatisticsLine text={"average"} value={average} hasPercent />
                    <StatisticsLine text={"positive"} value={positive} hasPercent />
                </table>
            )}
            {!hasReviews && <p>No feedback given</p>}
        </>
    );
};

const StatisticsLine = ({ text, value, hasPercent }) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>
                    {value} {hasPercent && "%"}
                </td>
            </tr>
        </tbody>
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
            <Button clickHandler={getHandler(good, setGood)} text={"good"} />
            <Button clickHandler={getHandler(neutral, setNeutral)} text={"neutral"} />
            <Button clickHandler={getHandler(bad, setBad)} text={"bad"} />
            <br />
            <Statistics reviews={{ good: good, neutral: neutral, bad: bad }} />
        </>
    );
};

const Button = ({ clickHandler, text }) => {
    return (
        <>
            <button onClick={clickHandler}>{text}</button>
        </>
    );
};

export default App;
