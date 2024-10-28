import React, { useState } from 'react';

function CandyCard({ candy }) {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}>&times;</span>
          <h2>{candy.name}</h2>
          <p><strong>{candy.calories} calories</strong></p>
          <p>{candy.description}</p>
          <p><em>Ingredients: {candy.ingredients}</em></p>
        </div>
      </div>
    );
  };

  return (
    <div className="candy-card">
      <img src={candy.image || 'placeholder-image.jpg'} alt={candy.name} />
      <h3>{candy.name}</h3>
      <button onClick={() => setShowModal(true)}>View Details</button>
      {showModal && <Modal />}
    </div>
  );
}

export default CandyCard;