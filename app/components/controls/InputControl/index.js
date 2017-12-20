import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class InputControl extends Component {
  constructor(args) {
    super(args);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(v) {
    this.props.input.onChange(v);
    if (typeof this.props.onValueChange === 'function') {
      this.props.onValueChange(v);
    }
  }

  render() {
    const {
      input,
      label,
      type,
      placeholder,
      errorStyles,
      meta: { touched },
      inputStyle,
      placeholderStyle,
      tooltipIfEmpty,
    } = this.props;

    let error = this.props.meta.error;

    const hasError = touched && error;

    let style = { paddingBottom: '30px' };
    if (hasError && errorStyles) {
      style = Object.assign({}, style, errorStyles);
    }

    // Check for immutable error objects
    if (error && typeof error.toJS === 'function') {
      error = error.toJS();
    }

    style = Object.assign({}, style, this.props.style);

    return (
      <div className="mdl-textfield" style={style}>
        <input className="mdl-textfield__input" style={inputStyle} type={type} {...input} onChange={this.handleValueChange} />
        {input.value === '' &&
          <label className="mdl-textfield__label" style={placeholderStyle} htmlFor={input.name}>{placeholder}</label>
        }
        {hasError &&
          <span className="mdl-textfield__error" style={{ visibility: 'visible' }}>
            <FormattedMessage {...error} />
          </span>
        }
        {
          input.value === '' && tooltipIfEmpty &&
          <span className="mdl-textfield__error" style={{ visibility: 'visible' }}>
            {tooltipIfEmpty}
          </span>
        }
      </div>
    );
  }
}

InputControl.propTypes = {
  input: PropTypes.any,
  meta: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errorStyles: PropTypes.object,
  onValueChange: PropTypes.func,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  placeholderStyle: PropTypes.object,
};

export default InputControl;
