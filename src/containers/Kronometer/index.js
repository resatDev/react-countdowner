import React, { useState } from 'react';
import Kronometer from '../../classes/Kronometer';
import { Button, Input, TextBox } from '../../components/index';

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
    <div className='kronometer-container'>
      <div className="kronometer-wrapper">
        <div className="kronometer-texts">
          <TextBox
            title={ 'Kronometer' }
            definition={ 'This is basic kronometer for right now!' }
            DOMSecond={ DOMSecond }
          />
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
      </div>
    </div>
  );
};

export default KronometerConteiner;