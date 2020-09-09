import React, { useState } from 'react';
import Kronometer from '../../classes/Kronometer';
import Button from '../../components/Button';

const NEW_KRONOMETER = new Kronometer(15);

const {
  getSecond,
  startKronometer,
  endKronometer,
  stopKronometer
} = NEW_KRONOMETER;

const KronometerConteiner = () => {
  const [DOMSecond, setDOMSecond] = useState(0);
  
  setInterval(() => {
    if (getSecond() <= 0) endKronometer();
    setDOMSecond(getSecond());
  }, 1000);

  return (
    <>
      <div>
        Kronometer
      </div>
      <div>
        { DOMSecond }
      </div>
      <Button
        classname={ 'kronometer-start' }
        onclick={ startKronometer }
        buttonText={ 'START' }
      />
      <Button
        classname={ 'kronometer-stop' }
        onclick={ stopKronometer }
        buttonText={ 'STOP' }
      />
    </>
  );
};

export default KronometerConteiner;