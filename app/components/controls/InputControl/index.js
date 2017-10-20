import React from 'react';
import { FormattedMessage } from 'react-intl';

const InputControl = (field) => {
  const {
    input,
    label,
    type,
    placeholder,
    errorStyles,
    meta: { touched },
  } = field;

  let error = field.meta.error;

  const hasError = touched && error;

  let style = { paddingBottom: '30px' };
  if (hasError && errorStyles) {
    style = Object.assign({}, style, errorStyles);
  }

  // Check for immutable error objects
  if (error && typeof error.toJS === 'function') {
    error = error.toJS();
  }

  return (
    <div className="mdl-textfield" style={style}>
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
