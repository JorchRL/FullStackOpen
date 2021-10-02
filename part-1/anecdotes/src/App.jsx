import { useState } from "react";

function App() {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code acconunts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
        "Premature optimization is the root of all evil.",
        "Debugginf is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    ];

    // zero filled array of size anecdotes.length
    const [points, setPoints] = useState(anecdotes.map((v) => 0));

    const [selected, setSelected] = useState(0);

    const shuffleSelectedQuote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    const voteForAnecdote = (anecdotesId) => {
        // Avoid mutating data directly
        const pointsCopy = [...points];
        pointsCopy[anecdotesId] += 1;
        setPoints(pointsCopy);
    };

    return (
        <div className='App'>
            {anecdotes[selected]}
            <p>has {points[selected]} votes</p>
            <br />
            <button
                onClick={() => {
                    voteForAnecdote(selected);
                }}>
                Vote!
            </button>
            <button onClick={shuffleSelectedQuote}>Random anecdote</button>
        </div>
    );
}

export default App;
