import React from 'react';
import { FormattedMessage } from 'react-intl';

const InputControl = (field) => {
  const {
    input,
    label,
    type,
    placeholder,
    meta: { error, touched },
  } = field;

  const hasError = touched && error;

  return (
    <div className="mdl-textfield" style={{ paddingBottom: '30px' }}>
      <input className="mdl-textfield__input" type={type} {...input} />
      {!input.value &&
        <label className="mdl-textfield__label" htmlFor={input.name}>{placeholder}</label>
      }
      {hasError &&
        <span className="mdl-textfield__error" style={{ visibility: 'visible' }}>
          <FormattedMessage {...error} />
        </span>
      }
    </div>
  );
};

export default InputControl;
