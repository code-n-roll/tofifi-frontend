import React, { Component } from 'react';
import PaymentInfo from './PaymentInfo';
import AddCardComponent from './AddCardComponent';

import './styles.css';

export default class PaymentsComponent extends Component {
  // TODO Replace with router
  state = {
    addCard: false
  };

  render() {
    let { cardLastFourDigits } = this.props;

    return (
      <div className="payments-wrapper">
        <div className="payments-form">
          {
            this.state.addCard
              ? <AddCardComponent
                  onSave={this.handleSaveCard}
                  onCancel={this.handleCancelSavingCard}
                />
              : <PaymentInfo
                  cardDigits={cardLastFourDigits}
                  onChangeCardClick={this.handleChangeCardClick}
                />
          }
        </div>
      </div>
    );
  }

  handleChangeCardClick = () => {
    this.setState({
      addCard: true
    });
  }

  handleSaveCard = () => {
    console.log('saved');
    this.setState({
      addCard: false
    });
  }

  handleCancelSavingCard = () => {
    this.setState({
      addCard: false
    });
  }
}
