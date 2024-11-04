import React from 'react';

const Card = ({ image, title, description }) => (
   <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
         <h3>{title}</h3>
         <p>{description}</p>
      </div>
   </div>
);

export default Card;
