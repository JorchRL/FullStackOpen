import React, { useState } from "react";

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
            <button onClick={handleLeft}>left</button>
            <button onClick={handleRight}>right</button>
            {right}
            <p>{history.join(" - ")}</p>
        </div>
    );
};

export default AppStateful;
