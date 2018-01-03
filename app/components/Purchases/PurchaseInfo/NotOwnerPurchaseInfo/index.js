import React, { Component } from 'react';
import PropTypes from 'prop-types';
import creditCardImage from './credit-card.png';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { onlyDecimal } from 'components/forms/normalizers';
import { PURHCASE_STATUSES } from 'pages/DashboardPage/constants';

class NotOwnerPurchaseInfo extends Component {
  state = {
    sum: null,
  };

  handleValueChange(e) {
    this.setState({ sum: onlyDecimal(e.target.value) });
  }

  render() {
    const { props } = this;

    return (
      <div className="purchase-info-container">
        <div className="purchase-info-centered">
          <div className="purchase-info_credit-card-container">
            <img src={creditCardImage} role="presentation" style={{ maxWidth: '100%' }} />
            { /* <span className="purchase-info_credit-card__owner">Anton Dacik</span> */ }
          </div>
          {
            props.status === PURHCASE_STATUSES.NEW && (
              <div className="purchase-info_amount">
                {props.sum ?
                  `Amount: ${props.sum} BYN` :
                  <TextField
                    type="text"
                    floatingLabelText="Sum for pay"
                    errorText={!props.sum && !this.state.sum ? 'Is required field' : null}
                    value={this.state.sum}
                    onChange={this.handleValueChange.bind(this)}
                  />
                }
              </div>
            )
          }

          {props.status === PURHCASE_STATUSES.DECLINED &&
            <div className="purchase-info_status purchase-info_status--declined">DECLINED</div>
          }
          {props.status === PURHCASE_STATUSES.PAYED &&
            <div className="purchase-info_status purchase-info_status--payed">PAYED</div>
          }
        </div>
        {props.status === PURHCASE_STATUSES.NEW &&
          <div className="purchase-info_buttons">
            <FlatButton
              label="Decline"
              secondary={true}
              style={{ marginRight: 20 }}
              onClick={props.onDeclineClick}/>

            <RaisedButton
              label="Pay"
              primary={true}
              disabled={!this.props.sum && !this.state.sum}
              onClick={() => props.onPayClick(this.state.sum)}/>
          </div>
        }
      </div>
    );
  }
}

NotOwnerPurchaseInfo.propTypes = {
  sum: PropTypes.number,
  onPayClick: PropTypes.func,
  onDeclineClick: PropTypes.func,
};

export default NotOwnerPurchaseInfo;
