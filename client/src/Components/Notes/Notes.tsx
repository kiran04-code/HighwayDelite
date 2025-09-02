import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Finish React project' },
    { id: 3, text: 'Read a new book' },
  ]);

  const handleDelete = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="p-4   justify-center items-center flex flex-col mt-2  ">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Notes</h1>

      <div className=" gap-4 flex flex-col md:w-100 w-90   p-5">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center  "
          >
            <p className="text-gray-800">{note.text}</p>
            <button
              onClick={() => handleDelete(note.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}

        {notes.length === 0 && (
          <p className="text-gray-500 col-span-full text-center mt-4">
            No notes available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Notes;
