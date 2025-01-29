import React, { useState } from 'react';

const TemperatureController = () => {
  const [temperature, setTemperature] = useState(0);

  // Function to handle temperature increase
  const incrementTemp = () => {
    setTemperature(prevTemp => prevTemp + 1);
  };

  // Function to handle temperature decrease
  const decrementTemp = () => {
    setTemperature(prevTemp => prevTemp - 1);
  };

  // Determine card color based on temperature
  const getCardColor = () => {
    if (temperature > 15) return '#780000'; // Red
    if (temperature < 0) return '#2a9d8f';  // Blue
    return '#31572c'; // Green (default)
  };

  return (
    <div className="app">
      <div 
        className="temperature-card"
        style={{ backgroundColor: getCardColor() }}
      >
        <h1>Temperature Controller</h1>
        <div className="temperature-display">
          <h1>{temperature}°C</h1>
        </div>
        
        <div className="controls">
          <button className="control-button" onClick={decrementTemp}>
            -
          </button>
          <button className="control-button" onClick={incrementTemp}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureController;