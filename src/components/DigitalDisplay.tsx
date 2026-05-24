// components/DigitalDisplay.jsx
// import React from 'react';
import { useClock } from '../hooks/useClock';

const DigitalDisplay = () => {
  const time = useClock();

  return (
    <div className="digital-clock">
      <h2>Digital: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default DigitalDisplay;