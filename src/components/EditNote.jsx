// EditNote
import React from "react";
import { useState, useEffect } from "react";
import { NotesProvider } from "../context/NoteContext";
import {
  useNotesContext,
  useNotesDispatchContext,
} from "../context/NoteContext";
import Title from "./Title";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const [notetoEdit, setNoteToEdit] = useState({
    title: "",
    notes: "",
  });
  const NOTES = useNotesContext();
  const dispatch = useNotesDispatchContext();
  const navigate = useNavigate();

  const params = useParams();
  const editedNoteID = Number(params.noteID);

  useEffect(() => {
    const noteId = editedNoteID;
    const notetoEdit = NOTES.find((note) => note.id === noteId);
    setNoteToEdit(notetoEdit);
  }, [editedNoteID, NOTES]);

  const HandleTitleChange = (e) => {
    setNoteToEdit({ ...notetoEdit, title: e.target.value });
  };
  const HandleNotesChange = (e) => {
    setNoteToEdit({ ...notetoEdit, notes: e.target.value });
  };

  const saveEditedNote = () => {
    if (notetoEdit.title.length !== 0 && notetoEdit.notes.length !== 0) {
      dispatch({
        type: "editedNote",
        id: editedNoteID,
        date: new Date().toUTCString(),
        title: notetoEdit.title,
        notes: notetoEdit.notes,
      });
      navigate("/");
    }
  };

  return (
    <NotesProvider>
      <div className="addnote_container">
        <div className="addnote_container_head">
          <Title title={"Edit Note"} className={"addnote_title"} />

          <div className="AddEditBtn">
            <button className="add_btn" onClick={saveEditedNote}>
              Save
            </button>
          </div>
        </div>
        <div className="contentArea">
          <div className="title_container">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={notetoEdit.title}
              onChange={HandleTitleChange}
            />
          </div>
          <div className="textArea_container">
            <textarea
              placeholder="Enter Something here"
              name="notes"
              value={notetoEdit.notes}
              onChange={HandleNotesChange}
            />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
};

export default EditNote;
