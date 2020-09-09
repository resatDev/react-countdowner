import React from 'react';
import { func, string } from 'prop-types';

const Button = ({
  buttonText,
  onclick,
  classname
}) => {
  return (
    <>
      <button
        className={ classname }
        onClick={ () => onclick()}
      >
        { buttonText }
      </button>
    </>
  );
};

Button.propTypes = {
  buttonText: string,
  onclick: func,
  classname: string
};

Button.defaultProps = {
  buttonText: '',
  onclick: () => {},
  classname: ''
};

export default Button;