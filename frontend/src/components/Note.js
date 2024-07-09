import React from 'react';
import '../App.css';

const Note = ({ note, deleteNote }) => {
  return (
    <div className='note'>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
};

export default Note;
