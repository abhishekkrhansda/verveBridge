import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import '../src/App.css'

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/notes').then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (note) => {
    axios.post('http://localhost:5000/notes', note).then((response) => {
      setNotes([...notes, response.data]);
    });
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/notes/${id}`).then(() => {
      setNotes(notes.filter((note) => note._id !== id));
    });
  };

  return (
    <div className='container'>
      <h1 className='Noteshead'>Notes</h1>
      <NoteForm className='note-form' addNote={addNote} />
      {notes.map((note) => (
        <Note className='note' key={note._id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default App;

