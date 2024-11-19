import React, { useState } from 'react';
import './CardComponent.css';
import image from '../assets/m.jpeg'; // Make sure the image path is correct

const CardComponent = ({ title, description, buttonText }) => {
  const [selectedMobile, setSelectedMobile] = useState(null);

  const handleMobileClick = (mobileName) => {
    setSelectedMobile(mobileName); // Set the selected mobile name
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>

          {/* Mobile names displayed horizontally */}
          <div className="mobile-names">
            {['Redmi', 'Realme', 'Samsung', 'Poco'].map((mobile, index) => (
              <span
                key={mobile}
                className={`mobile-name ${selectedMobile === mobile ? 'active' : ''}`}
                style={{ color: `hsl(${index * 90}, 100%, 50%)` }} // Different color for each mobile
                onClick={() => handleMobileClick(mobile)}
              >
                {mobile}
              </span>
            ))}
          </div>

          <button className="card-button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
