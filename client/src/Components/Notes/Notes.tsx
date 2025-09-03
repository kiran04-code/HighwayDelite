import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/contextAuth";
import toast from "react-hot-toast";

const NotesApp = () => {
  interface INotes {
    _id: string
    notes: string
    cerateUser: unknown,
  }
  const { axiosInstance } = useAuth();
  const [newNote, setNewNote] = useState({
    text: ""
  });
  const [NotesArry, setNotesARRY] = useState<[INotes] | []>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote({ text: e.target.value });
    console.log(NotesArry)
  };

  const handleAddNote = async () => {
    if (!newNote) {
      toast.error("Enterthe  Notes Before Add");
    }


    try {
      const { data } = await axiosInstance.post("/create", { text: newNote });

      if (data.success) {
        toast.success(data.message);
        setNewNote({ text: "" });
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handledelte = async (id: string) => {
    console.log(id)
    try {
      const { data } = await axiosInstance.post("/Hnadledelted", { id })
      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const findNotes = async () => {
      const { data } = await axiosInstance.get("/finAllNotes")
      if (data.success) {
        setNotesARRY(data?.NotesData)
      }
    }
    findNotes()
  }, [handleAddNote, handledelte])

  return (
    <div className="p-4 justify-center items-center flex flex-col mt-2">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Notes</h1>

      <div className="flex gap-2 w-full md:w-2/3 mb-4">

        <input
          type="text"
          onChange={handleChange}
          placeholder="Write your note..."
          value={newNote.text}
          className="flex-1 p-3 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
        />


        <button
          onClick={handleAddNote}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-2xl shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition duration-200"
        >
          Add
        </button>
      </div>

      <div className="gap-4 flex flex-col md:w-2/3 w-full p-5">
        {NotesArry.map((note, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
          >
            <p className="text-gray-800">{note.notes}</p>
            <button
              onClick={() => handledelte(note._id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}

        {NotesArry.length === 0 && (
          <p className="text-gray-500 text-center mt-4">
            No notes available.
          </p>
        )}
      </div>
    </div>
  );
};

export default NotesApp;
