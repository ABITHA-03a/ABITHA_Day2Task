import React from 'react';
import CardComponent from './components/CardComponent'; // Adjust the path if necessary

const App = () => {
  return (
    <div className="app">
      <CardComponent 
        title="BeeZ mobiles"
        description="here's an amazing product with great features. It will solve all your problems. Get yours now!"
        buttonText="Learn More"
        imageUrl="https://via.placeholder.com/300x200" // Use an image URL or import an image
      />
    </div>
  );
};

export default App;
