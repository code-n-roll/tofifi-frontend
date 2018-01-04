import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => (
  <div style={{ display: 'inline-block', ...props.style }}>
    <input
      id={`checkbox-${props.id}`}
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
    />
    <label htmlFor={`checkbox-${props.id}`} >
      <span />
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.any.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
