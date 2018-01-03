import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField';

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
      hintText,
      hintStyle,
      meta: { touched },
      style,
      inputStyle,
      placeholderStyle,
      tooltipIfEmpty,
      floatingLabel,
      className,
      inputProps
    } = this.props;

    let error = this.props.meta.error;

    const hasError = touched && error;

    // Check for immutable error objects
    if (error && typeof error.toJS === 'function') {
      error = error.toJS();
    }

    return (
      <TextField
        style={style}
        inputStyle={inputStyle}
        type={type}
        hintText={hintText}
        hintStyle={hintStyle}
        floatingLabelText={floatingLabel}
        {...input}
        {...inputProps}
        onChange={this.handleValueChange}
        errorText={hasError ? <FormattedMessage {...error} /> : null}
      />
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
