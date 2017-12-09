import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PurchaseForm from 'components/forms/PurchaseForm';

const SPLIT_TYPES = {
  equally: 'equally',
  custom: 'custom',
};

class CreatePurchaseStep2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      splitType: SPLIT_TYPES.equally,
    };
  }

  render() {
    return (
      <div>
        <PurchaseForm participants={this.props.participants} />
      </div>
    );
  }
}

CreatePurchaseStep2.propTypes = {
  participants: PropTypes.array,
};

export default CreatePurchaseStep2;
