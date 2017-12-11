import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import { makeSelectUsers } from 'pages/common/selectors';
import PurchaseForm from 'components/forms/PurchaseForm';

class CreatePurchaseStep2 extends Component {
  constructor(props) {
    super(props);

    this.getUsersFromIds = this.getUsersFromIds.bind(this);
  }

  getUsersFromIds() {
    console.log(this.props.participantsIds);
    const participantsIds = new Set(this.props.participantsIds);
    return _.filter(this.props.users, (user) => participantsIds.has(user.id))
  }

  render() {
    return (
      <PurchaseForm
        participants={this.getUsersFromIds()}
      />
    );
  }
}

CreatePurchaseStep2.propTypes = {
  users: PropTypes.array,
  participantsIds: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

export default connect(mapStateToProps)(CreatePurchaseStep2);
