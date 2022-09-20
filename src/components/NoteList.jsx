import React from "react";
import {
  useNotesContext,
  useNotesDispatchContext,
} from "../context/NoteContext";

import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin3Line } from "react-icons/ri";

import { Link } from "react-router-dom";

const Notelist = ({ query }) => {
  const NOTES = useNotesContext();
  const dispatch = useNotesDispatchContext();

  const showSettings = (noteID) => {
    dispatch({
      type: "showSettings",
      id: noteID,
    });
  };

  const hideSettings = (noteID) => {
    dispatch({
      type: "hideSettings",
      id: noteID,
    });
  };

  const HandleDelete = (noteID) => {
    dispatch({
      type: "deleteNote",
      id: noteID,
    });
  };

  return (
    <ul className="notes">
      {NOTES.filter((note) => note.title.toLowerCase().includes(query)).map(
        (NOTE, index) => {
          return (
            <li key={NOTE.id || index} className="note">
              <div className="above">
                <div className="title">{NOTE.title}</div>
                <span
                  class="material-symbols-outlined"
                  onMouseEnter={() => {
                    showSettings(NOTE.id);
                  }}
                >
                  more_vert
                </span>
                <div
                  className={NOTE.status ? "settings" : "unactive"}
                  onMouseLeave={() => {
                    hideSettings(NOTE.id);
                  }}
                >
                  <Link to={`/EditNote/${NOTE.id}`} className="edit edit_link">
                    <div className="edit">
                      <div className="edit_icon">
                        <FiEdit2 />
                      </div>
                      <p className="edit_text">edit</p>
                    </div>
                  </Link>

                  <div
                    className="delete"
                    onClick={() => {
                      HandleDelete(NOTE.id);
                    }}
                  >
                    <div className="delete_icon">
                      <RiDeleteBin3Line />
                    </div>
                    <p className="delete_text">delete</p>
                  </div>
                </div>
              </div>
              <div className="note_content">
                {NOTE.notes.length > 20 ? (
                  <>{NOTE.notes.slice(0, 45) + " ........"}</>
                ) : (
                  <>{NOTE.notes}</>
                )}
              </div>
              <div className="date">{NOTE.date} </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Notelist;
