
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  function saveNote() {
    if (note.trim() === '') {
      alert('Please write a note');
      return;
    }

    if (editIndex === -1) {
      setNotes([...notes, note]);
    } else {
      let newNotes = [...notes];
      newNotes[editIndex] = note;
      setNotes(newNotes);
      setEditIndex(-1);
    }

    setNote('');
  }

  function editNote(index) {
    setNote(notes[index]);
    setEditIndex(index);
  }

  function deleteNote(index) {
    let newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    setEditIndex(-1);
    setNote('');
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">My Notes</h2>

      <div className="note-box mx-auto mt-4 p-4">
        <input
          type="text"
          className="form-control"
          placeholder="Write your note here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          className="btn btn-primary mt-3"
          onClick={saveNote}
        >
          {editIndex === -1 ? 'Add Note' : 'Update Note'}
        </button>

        <h4 className="mt-4">My Saved Notes</h4>

        {notes.map((item, index) => (
          <div className="border p-3 mt-2" key={index}>
            <p>{item}</p>

            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => editNote(index)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteNote(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;