import { func, string } from 'prop-types';
import React from 'react';

const Input = ({
  classname,
  onblur,
  placeholder
}) => {
  return (
    <div className='inputBox-container'>
      <input
        className={ 'inputBox ' + classname }
        onBlur={ (e) => onblur(e.target.value)}
        placeholder={ placeholder }
        type='number'
      />
    </div>
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