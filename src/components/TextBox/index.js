import { number, string } from 'prop-types';
import React from 'react';

const TextBox = ({
  title,
  definition,
  DOMSecond,
  finishText
}) => {
  return (
    <>
      <div className='textbox-title'>
        { title }
      </div>
      <div className="textbox-definition">
        { definition}
      </div>
      <div className="textbox-remainingTime">
        { finishText || DOMSecond }
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