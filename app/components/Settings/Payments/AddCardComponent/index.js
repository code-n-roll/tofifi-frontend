import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCardComponent extends Component {
  state = {  }
  render() {
    let { onSave, onCancel } = this.props;

    return (
      <div>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSave}>Save</button>
      </div>
    );
  }
}

AddCardComponent.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default AddCardComponent;
