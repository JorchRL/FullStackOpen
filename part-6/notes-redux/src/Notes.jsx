import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, toggleImportanceOf } from "./reducers/noteReducer";

export const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button type='submit'>add</button>
    </form>
  );
};

export const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note.id)}>
          {note.content} <strong>{note.important ? "important" : ""}</strong>
        </li>
      ))}
    </ul>
  );
};
