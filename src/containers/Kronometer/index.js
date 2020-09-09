import React, { useState } from 'react';
import Kronometer from '../../classes/Kronometer';
import Button from '../../components/Button';
import Input from '../../components/Input';

const NEW_KRONOMETER = new Kronometer();

const {
  getSecond,
  setSecond,
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
      <Input
        classname={ 'kronometer-input'}
        onblur={ (userTime) => setSecond(userTime)}
        placeholder={ 'Please type second for kronometer' }
      />
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