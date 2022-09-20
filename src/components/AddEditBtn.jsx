import React from "react";

const AddEditBtn = ({ text, className, AddNewNote }) => {
  return (
    <div className="AddEditBtn">
      <button className={className} onClick={AddNewNote}>
        {text}
      </button>
    </div>
  );
};

export default AddEditBtn;
