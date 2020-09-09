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

export default Input;