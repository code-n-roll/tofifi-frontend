import React from 'react';

const InputControl = (field) => {
  const {
    input,
    label,
    type,
    placeholder,
  } = field;

  return (
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type={type} {...input} />
      {!input.value &&
        <label className="mdl-textfield__label" htmlFor={input.name}>{placeholder}</label>
      }
    </div>
  );
};

export default InputControl;
