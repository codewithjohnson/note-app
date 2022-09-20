import { createContext, useContext, useReducer, useEffect } from "react";
import { InitialNotes } from "../state/InitialNotes";
import NotesReducer from "../reducers/NotesReducer";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

const getStoredNotes = (initialNotes = InitialNotes) => {
  return JSON.parse(localStorage.getItem("storedNotes")) || initialNotes;
};

export const NotesProvider = ({ children }) => {
  const [NOTES, dispatch] = useReducer(NotesReducer, getStoredNotes());
  useEffect(() => {
    localStorage.setItem("storedNotes", JSON.stringify(NOTES));
  }, [NOTES]);

  return (
    <NotesContext.Provider value={NOTES}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  return useContext(NotesContext);
};
export const useNotesDispatchContext = () => {
  return useContext(NotesDispatchContext);
};
