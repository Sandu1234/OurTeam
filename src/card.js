import React from 'react';
import { motion } from 'framer-motion';
import './card.css';

const Card = ({ name, role, image, isActive, onClick }) => {
  return (
    <motion.div
      className={`card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      layout
      transition={{ duration: 0.5 }}
    >
      <div className="image-container">
        <img src={image} alt={name} className="card-image" />
        <div className="overlay">
          <p className="role">{role}</p>
          <h2 className="name">{name}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
