import { number, string } from 'prop-types';
import React from 'react';

const TextBox = ({
  title,
  definition,
  DOMSecond,
  finishText
}) => {

  const timeText = finishText !== 'no' ? finishText : DOMSecond;
  return (
    <>
      <div className='textbox-title'>
        { title }
      </div>
      <div className="textbox-definition">
        { definition}
      </div>
      <div className="textbox-remainingTime">
        { timeText }
      </div>
    </>
  );
};

TextBox.propTypes = {
  title: string,
  definition: string,
  DOMSecond: number,
  finishText: string
};

TextBox.defaulProps = {
  title: '',
  definition: '',
  DOMSecond: 0,
  finishText: ''
};

export default TextBox;