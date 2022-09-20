import React from "react";
import ReactDOM from "react-dom/client";
import { NotesProvider } from "./context/NoteContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import ErrorPage from './components/ErrorPage'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="AddNote" element={<AddNote />} />
          <Route path="EditNote/:noteID" element={<EditNote />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  </React.StrictMode>
);
