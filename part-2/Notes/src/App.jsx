import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState("");
    const [showAll, setShowAll] = useState(false);

    const addNote = (event) => {
        event.preventDefault();
        // console.log("button clicked", event.target);
        setNotes(
            notes.concat({
                id: notes.length + 1,
                content: newNote,
                date: new Date().toISOString(),
                important: Math.random() < 0.5,
            })
        );
        setNewNote("");
        // console.log("Click event target", event.target[0]);
        // console.log("value: ", event.target[0].value);

        // Reset the value in the text input area
        event.target[0].value = "";
        // console.log("value: ", event.target[0].value);
    };

    const handleNoteChange = (event) => {
        // console.log(event.target.value);
        setNewNote(event.target.value);
    };

    const notesToShow = showAll ? notes : notes.filter((note) => note.important);

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>show {showAll ? "important" : "all"}</button>
            </div>
            <ul>
                {notesToShow.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>
            <hr />
            <form onSubmit={addNote}>
                <input onChange={handleNoteChange} placeholder={"Add a new note here..."} />
                <button type='submit' disabled={newNote.length <= 0}>
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default App;
