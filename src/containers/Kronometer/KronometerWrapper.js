import { func, number, string } from 'prop-types';
import React from 'react';
import { Button, Input, TextBox } from '../../components';
import { KronometerConstant } from '../../constants';

const {
  KRONOMETER_TITLE,
  KRONOMETER_DEFINITION
} = KronometerConstant.TEXTS;

const {
  KRONOMETER_INPUT_PLACEHOLDER
} = KronometerConstant.INPUT_TEXTS;

const {
  KRONOMETER_BUTTON_START_TEXT,
  KRONOMETER_BUTTON_STOP_TEXT,
  KRONOMETER_BUTTON_RESET_TEXT
} = KronometerConstant.BUTTON_TEXT;

const KronometerWrapper = ({
  setSecond,
  DOMSecond,
  startKronometer,
  stopKronometer,
  resetKronometer,
  finishText
}) => {

  return (
    <div className="kronometer-wrapper">
      <div className="kronometer-texts">
        <TextBox
          title={ KRONOMETER_TITLE }
          definition={ KRONOMETER_DEFINITION }
          DOMSecond={ DOMSecond || 0}
          finishText={ finishText }
        />
      </div>
      <Input
        classname={ 'kronometer-input'}
        onblur={ (userTime) => setSecond(userTime)}
        placeholder={ KRONOMETER_INPUT_PLACEHOLDER }
      />
      <div className="kronometer-buttons">
        <Button
          classname={ 'kronometer-start' }
          onclick={ startKronometer }
          buttonText={ KRONOMETER_BUTTON_START_TEXT }
        />
        <Button
          classname={ 'kronometer-stop' }
          onclick={ stopKronometer }
          buttonText={ KRONOMETER_BUTTON_STOP_TEXT }
        />
        <Button
          classname={ 'kronometer-reset' }
          onclick={ resetKronometer }
          buttonText={ KRONOMETER_BUTTON_RESET_TEXT }
        />
      </div>
    </div>
  );
};

KronometerWrapper.propTypes = {
  setSecond: func,
  DOMSecond: number,
  startKronometer: func,
  stopKronometer: func,
  resetKronometer: func,
  finishText: string
};

KronometerWrapper.defaultProps = {
  setSecond: () => {},
  DOMSecond: 0,
  startKronometer: () => {},
  stopKronometer: () => {},
  resetKronometer: () => {},
  finishText: ''
};

export default KronometerWrapper;