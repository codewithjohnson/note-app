import React from "react";
import { useState } from "react";
import { NotesProvider } from "../context/NoteContext";
import { useNotesDispatchContext } from "../context/NoteContext";
import Title from "./Title";
import AddEditBtn from "./AddEditBtn";
import { useNavigate } from "react-router-dom";

let currentID = 4;

const AddNote = () => {
  const [newNote, setNewNote] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const navigate = useNavigate();

  const dispatch = useNotesDispatchContext();

  const AddNewNote = () => {
    if (newNote.length !== 0 && newTitle.length !== 0) {
      dispatch({
        type: "addedNewNote",
        id: currentID++,
        date: new Date().toUTCString(),
        title: newTitle,
        notes: newNote,
        status: false,
      });
      navigate("/");
    }
  };

  return (
    <NotesProvider>
      <div className="addnote_container">
        <div className="addnote_container_head">
          <Title title={"New Note"} className={"addnote_title"} />
          <AddEditBtn
            text={"Add"}
            className={"add_btn"}
            AddNewNote={AddNewNote}
          />
        </div>
        <div className="contentArea">
          <div className="title_container">
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div
            className="textArea_container"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          >
            <textarea placeholder="Enter Something here" />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
};

export default AddNote;
