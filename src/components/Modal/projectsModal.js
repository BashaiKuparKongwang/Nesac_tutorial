import React from "react";
import Modal from 'react-modal';

const ProjectsModal = ({ isOpen, location, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          zIndex: 1000, // Adjust the z-index value as needed
        },
        content: {
          top: '38%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
        },
      }}
    >
      <h2>{location.state}</h2>
      {Object.entries(location).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ProjectsModal;
