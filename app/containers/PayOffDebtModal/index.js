import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import DefaultModalHeader from 'components/Modals/DefaultModalHeader';
import Checkbox from 'components/Checkbox';
import { onlyDecimal } from 'components/forms/normalizers';
import { makeSelectDebtModalState, makeSelectUser, makeSelectDebtError } from 'pages/common/selectors';
import { setDebtModalState, setUserData, payOffDebt, clearDebts, setDebtError } from 'pages/common/actions';

const TYPES = {
  payAll: 'pay-all',
  sendMoney: 'send-money',
};

class PayOffDebtModal extends Component {

  constructor(props) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handlePay = this.handlePay.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.handleSumValueChange = this.handleSumValueChange.bind(this);

    this.state = {
      selectedType: TYPES.payAll,
      sum: '',
    };
  }

  handleCloseClick() {
    this.props.setDebtModalState(false);
    this.props.setDebtError(null);
  }

  handlePay() {
    const id = this.props.user.id;
    if (this.state.selectedType === TYPES.payAll) {
      this.props.payOffDebt({ userId: id, sum: Number(this.state.sum) });
    } else {
      this.props.clearDebts({ userId: id });
    }
  }

  handleSumValueChange(e) {
    const sum = onlyDecimal(e.target.value);
    this.setState({ sum });
  }

  onStatusChange(type) {
    this.props.setDebtError(null);
    this.setState({ selectedType: type });
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
          <div style={{ padding: 20 }}>
            <div style={{ marginBottom: 20 }}>
              <Checkbox
                id="pay-all"
                checked={this.state.selectedType === TYPES.payAll}
                onChange={() => this.onStatusChange(TYPES.payAll)}
                style={{ verticalAlign: 'top' }}
              />
              <span style={{ cursor: 'pointer', marginLeft: 10 }} onClick={() => this.onStatusChange(TYPES.payAll)}>Clear debt</span>
            </div>
            <div>
              <Checkbox
                id="send-money"
                checked={this.state.selectedType === TYPES.sendMoney}
                onChange={() => this.onStatusChange(TYPES.sendMoney)}
                style={{ verticalAlign: 'top' }}
              />
              <span style={{ cursor: 'pointer', marginLeft: 10 }} onClick={() => this.onStatusChange(TYPES.sendMoney)}>Send money</span>
            </div>
            <div>
              {this.state.selectedType === TYPES.sendMoney && (
                <TextField
                  style={style}
                  floatingLabelText="Sum"
                  onChange={this.handleSumValueChange}
                  value={this.state.sum}
                />
              )}
            </div>
            <div style={{ textAlign: 'center', position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{ color: 'red' }}>{props.error}</div>
              <button
                className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white big-btn big-btn-margin"
                disabled={this.state.selectedType === TYPES.sendMoney && this.state.sum === ''}
                onClick={this.handlePay}
              >
                {this.state.selectedType === TYPES.payAll ? 'Pay' : 'Send money'}
              </button>
            </div>
          </div>
      </Modal>
    );
  }
}

PayOffDebtModal.propTypes = {
  isOpen: PropTypes.bool,
  setDebtModalState: PropTypes.func,
  setUserData: PropTypes.func,
  payOffDebt: PropTypes.func,
  clearDebts: PropTypes.func,
  setDebtError: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectDebtModalState(),
  user: makeSelectUser(),
  error: makeSelectDebtError(),
});

const mapDispatchToProps = {
  setDebtModalState,
  setUserData,
  payOffDebt,
  clearDebts,
  setDebtError,
};

export default connect(mapStateToProps, mapDispatchToProps)(PayOffDebtModal);
