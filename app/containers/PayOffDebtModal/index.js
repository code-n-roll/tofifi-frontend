import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DefaultModalHeader from 'components/Modals/DefaultModalHeader';
import { makeSelectDebtModalState, makeSelectUser } from 'pages/common/selectors';
import { setDebtModalState, setUserData, payOffDebt } from 'pages/common/actions';

class PayOffDebtModal extends Component {

  constructor(props) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handlePay = this.handlePay.bind(this);
  }

  handleCloseClick() {
    this.props.setDebtModalState(false);
  }

  handlePay() {
    debugger;
    const id = this.props.user.id;
    const element = document.getElementById('debt-input');
    this.props.payOffDebt({userToId: id, amount: Number(element.value)});
  }

  render() {
    const { props } = this;

    const style = {
        content: {
          width: '90%',
          maxWidth: 410,
          minHeight: 300,
          overflow: 'hidden',
        },
    };

    return (
      <Modal
        isOpen={this.props.isOpen}
        style={style}
      >
        <DefaultModalHeader title="Pay off debt" onCloseClick={this.handleCloseClick} />
        <div style={{ paddingBottom: '20px' }}>
          <input
            id="debt-input"
            className="mdl-textfield__input"
            name="debt"
            type="text"
            placeholder="Debt sum"
            // value={this.props.user.debt}
          />
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white big-btn big-btn-margin"
          disabled={props.submitting || props.invalid}
          onClick={this.handlePay}
        >
        Pay
        </button>
      </Modal>
    );
  }
}

PayOffDebtModal.propTypes = {
  isOpen: PropTypes.bool,
  setDebtModalState: PropTypes.func,
  setUserData: PropTypes.func,
  payOffDebt: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectDebtModalState(),
  user: makeSelectUser(),
});

const mapDispatchToProps = {
  setDebtModalState,
  setUserData,
  payOffDebt,
};

export default connect(mapStateToProps, mapDispatchToProps)(PayOffDebtModal);
