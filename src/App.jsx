import React from "react";
import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import NoteList from "./components/NoteList";
import { IconContext } from "react-icons";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <header>
        <Title title={"Notes"} className={"app_title"} />
        <form className="search_container">
          <span class="material-symbols-outlined">search</span>
          <input
            type="search"
            placeholder="search notes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </header>
      <div className="notes_container">
        <NoteList query={query} />
      </div>

      <Link to="/AddNote">
        <IconContext.Provider value={{ className: "react-icons" }}>
          <div className="add">
            <IoIosAddCircle />
          </div>
        </IconContext.Provider>
      </Link>

      <div className="footer">
        <p className="trademark">Designed by muyiwa johnson</p>
      </div>
    </div>
  );
};

export default App;
