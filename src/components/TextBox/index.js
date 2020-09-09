import { number, string } from 'prop-types';
import React from 'react';

const TextBox = ({
  title,
  definition,
  DOMSecond
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
        { DOMSecond }
      </div>
    </>
  );
};

TextBox.propTypes = {
  title: string,
  definition: string,
  DOMSecond: number
};

TextBox.defaulProps = {
  title: '',
  definition: '',
  DOMSecond: 0
};

export default TextBox;