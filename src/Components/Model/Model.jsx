import React from 'react'

const Model = ({ message, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <button onClick={onClose} className="btn btn-primary">Close</button>
        </div>
      </div>
    );
  };
export default Model