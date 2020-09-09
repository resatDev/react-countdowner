import React, { useState } from 'react';
import Kronometer from '../../classes/Kronometer';
import KronometerWrapper from './KronometerWrapper';

const NEW_KRONOMETER = new Kronometer();

const {
  getSecond,
  setSecond,
  startKronometer,
  endKronometer,
  stopKronometer,
  getFinishKronometerText
} = NEW_KRONOMETER;

const KronometerConteiner = () => {
  const [DOMSecond, setDOMSecond] = useState(0);
  
  setInterval(() => {
    if (getSecond() <= 0) endKronometer();
    setDOMSecond(getSecond());
  }, 1000);

  return (
    <div className="kronometer-container">
      <KronometerWrapper
        setSecond={ setSecond }
        startKronometer={ startKronometer }
        stopKronometer={ stopKronometer }
        DOMSecond={ DOMSecond !== 0 ? DOMSecond : getFinishKronometerText() }
      />
    </div>
  );
};

export default KronometerConteiner;