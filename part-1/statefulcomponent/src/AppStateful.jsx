import React, { useState } from "react";

// Helper components
const History = (props) => {
    if (props.allClicks.length === 0) {
        return <div>The app is used by pressing the buttons</div>;
    }

    return <div>Button press history: {props.allClicks.join(" - ")}</div>;
};

const Button = ({ clickHandler, text }) => {
    return <button onClick={clickHandler}>{text}</button>;
};

// Main component
const AppStateful = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [history, setHistory] = useState([]);

    const handleRight = () => {
        setRight(right + 1);
        setHistory(history.concat("R"));
    };
    const handleLeft = () => {
        setLeft(left + 1);
        setHistory(history.concat("L"));
    };

    return (
        <div>
            {left}
            <Button clickHandler={handleLeft} text={"left"} />
            <Button clickHandler={handleRight} text={"Right"} />
            {right}
            {/* <p>Num. of clicks= {history.length}</p> */}
            <History allClicks={history} />
        </div>
    );
};

export default AppStateful;
