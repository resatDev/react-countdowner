import React from 'react';
import { Button, Input, TextBox } from '../../components';

const KronometerWrapper = ({
  setSecond,
  DOMSecond,
  startKronometer,
  stopKronometer
}) => {
  return (
    <div className="kronometer-wrapper">
      <div className="kronometer-texts">
        <TextBox
          title={ 'Kronometer' }
          definition={ 'This is basic kronometer for right now!' }
          DOMSecond={ DOMSecond || 0}
        />
      </div>
      <Input
        classname={ 'kronometer-input'}
        onblur={ (userTime) => setSecond(userTime)}
        placeholder={ 'Please type second for kronometer...' }
      />
      <div className="kronometer-buttons">
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

export default KronometerWrapper;