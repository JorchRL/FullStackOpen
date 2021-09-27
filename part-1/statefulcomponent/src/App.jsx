import { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [reset, setReset] = useState(false);

    //setTimeout(() => setCounter(counter + 1), 1000);

    const handleClick = () => {
        setCounter(counter + 1);
        if (!reset) setReset(true);
    };

    const handleReset = () => {
        if (reset) {
            setCounter(0);
            setReset(false);
        }
    };

    return (
        <div className='App'>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>Click me!</button>
            {reset && <button onClick={handleReset}>Reset me!</button>}
        </div>
    );
};

export default App;
