import React from "react";

const Modal = ({ isOpen, onClose, onDelete}) => {
    if(!isOpen) {
        return null;
    }
    return(
        <div className="modal">
        <div className="modal-content">
          <h2>Confirm delete</h2>
          <p>Are you sure you want to delete?</p>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
};
export default Modal;