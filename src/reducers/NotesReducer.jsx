const NotesReducer = (NOTES, action) => {
  switch (action.type) {
    case "addedNewNote": {
      return [
        ...NOTES,
        {
          id: action.id,
          date: action.date,
          title: action.title,
          notes: action.notes,
          status: action.status,
        },
      ];
    }
    case "deleteNote": {
      return [...NOTES].filter((note) => note.id !== action.id);
    }
    case "editedNote": {
      return [...NOTES].map((note) => {
        if (
          note.id === action.id &&
          (note.title !== action.title) !== action.notes
        ) {
          return { ...note, title: action.title, notes: action.notes };
        } else {
          return note;
        }
      });
    }

    case "showSettings": {
      const rawNote = [...NOTES].map((note) => {
        return { ...note, status: action.status };
      });
      return rawNote.map((note) => {
        if (note.id === action.id) {
          return { ...note, status: !action.status };
        } else {
          return note;
        }
      });
    }
    case "hideSettings": {
      return [...NOTES].map((note) => {
        if (note.id === action.id) {
          return { ...note, status: action.status };
        } else {
          return note;
        }
      });
    }
  }
};

export default NotesReducer;
