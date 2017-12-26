import React, { Component } from 'react';
import PaymentInfo from './PaymentInfo';
import AddCardComponent from './AddCardComponent';

import './styles.css';

export default class PaymentsComponent extends Component {
  constructor(props) {
    super(props);

    this.handleCancelSavingCard = this.handleCancelSavingCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleCancelSavingCard = this.handleCancelSavingCard.bind(this);

    this.state = {
      addCard: false,
    };
  }

  handleChangeCardClick() {
    this.setState({
      addCard: true,
    });
  }

  handleSaveCard() {
    this.setState({
      addCard: false,
    });
  }

  handleCancelSavingCard() {
    this.setState({
      addCard: false,
    });
  }

  render() {
    const { cardLastFourDigits } = this.props.userProfile;

    return (
      <div className="payments-wrapper">
        <div className="payments-form">
          {
            this.state.addCard ?
            (
              <AddCardComponent
                onSave={this.handleSaveCard}
                onCancel={this.handleCancelSavingCard}
              />
            ) :
            (
              <PaymentInfo
                cardDigits={cardLastFourDigits}
                onChangeCardClick={this.handleChangeCardClick}
              />
            )
          }
        </div>
      </div>
    );
  }
}
