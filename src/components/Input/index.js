import { func, string } from 'prop-types';
import React from 'react';

const Input = ({
  classname,
  onblur,
  placeholder
}) => {
  return (
    <>
      <input
        className={ classname }
        onBlur={ (e) => onblur(e.target.value)}
        placeholder={ placeholder }
      />
    </>
  );
};

Input.propTypes = {
  classname: string,
  onblur: func,
  placeholder: string
};

Input.defaultProps = {
  classname: '',
  onblur: () => {},
  placeholder: ''
};

export default Input;