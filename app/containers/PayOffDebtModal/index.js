import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import DefaultModalHeader from 'components/Modals/DefaultModalHeader';
import Checkbox from 'components/Checkbox';
import { onlyDecimal } from 'components/forms/normalizers';
import { makeSelectDebtModalState, makeSelectUser, makeSelectDebtError } from 'pages/common/selectors';
import { setDebtModalState, setUserData, payOffDebt, clearDebts, setDebtError } from 'pages/common/actions';
import './styles.css';

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
      selectedType: TYPES.sendMoney,
      sum: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedType: nextProps.user.debt < 0 ? TYPES.payAll : TYPES.sendMoney,
      sum: '',
    });
  }

  onStatusChange(type) {
    this.props.setDebtError(null);
    this.setState({ selectedType: type });
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

  render() {
    const { props } = this;

    const style = {
      content: {
        width: '90%',
        maxWidth: 300,
        height: 350,
        overflow: 'hidden',
      },
    };

    return (
      <Modal
        isOpen={this.props.isOpen}
        style={style}
      >
        <DefaultModalHeader title="Pay off debt" onCloseClick={this.handleCloseClick} />
          <div className="payoff-modal" style={{ padding: 20 }}>
            <div>
              {
                props.user.debt < 0 &&
                  <div style={{ marginBottom: 20 }}>
                    <Checkbox
                      id="pay-all"
                      checked={this.state.selectedType === TYPES.payAll}
                      onChange={() => this.onStatusChange(TYPES.payAll)}
                      style={{ verticalAlign: 'top' }}
                    />
                    <span style={{ cursor: 'pointer', marginLeft: 10 }} onClick={() => this.onStatusChange(TYPES.payAll)}>
                      Clear debt ({Math.abs(props.user.debt).toFixed(2)} BYN)
                    </span>
                  </div>
              }
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
                    style={{width: 110}}
                    floatingLabelText="Sum"
                    onChange={this.handleSumValueChange}
                    value={this.state.sum}
                  />
                )}
              </div>
            </div>
            <div className="payoff-modal__bottom-row">
              <div className="payoff-modal__error">{props.error}</div>
              <RaisedButton
                fullWidth
                primary
                label={this.state.selectedType === TYPES.payAll ? 'Pay' : 'Send money'}
                disabled={this.state.selectedType === TYPES.sendMoney && this.state.sum === ''}
                onClick={this.handlePay}
              />
            </div>
          </div>
      </Modal>
    );
  }
}

PayOffDebtModal.propTypes = {
  user: PropTypes.any,

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
