import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BankCardForm from 'components/forms/BankCardForm';

class AddCardComponent extends Component {
  render() {
    const { onSave, onCancel } = this.props;

    return (
      <div>
        <BankCardForm onCancel={onCancel} onSave={onSave} />
      </div>
    );
  }
}

AddCardComponent.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddCardComponent;
