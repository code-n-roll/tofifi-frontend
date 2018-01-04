import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import storeImagePlacehoder from 'images/store-placeholder.png';
import './styles.css';

class ItemCard extends Component {
  state = {
    amount: 0,
  };

  handleChangeAmount = (diff) => () => {
    const { id, price } = this.props;

    const prevAmount = this.state.amount;
    const nextAmount = prevAmount + diff;

    if (nextAmount >= 0 && nextAmount < 100) {
      this.setState({
        amount: nextAmount,
      });
    }

    this.props.onSelectItem(id, nextAmount, price * nextAmount);
  }

  render() {
    const { name, currency, price, description, imageUrl } = this.props;
    const { amount } = this.state;

    let displayedSum = amount === 0 ?
      price :
      price * amount;

    displayedSum = Math.round(displayedSum * 100) / 100;

    return (
      <Paper className="store-item-preview">
        <div
          className="store-item-preview__wrapper"
          style={{ backgroundImage: `url(${imageUrl}), url(${storeImagePlacehoder})` }}
        >
          <div className="store-item-preview__name-wrapper">
            <span className="store-item-preview__name">{name}</span>
          </div>
        </div>
        <div className="store-item-preview__bottow-row">
          <div className="store-item-preview__items-control">
            <div className="plus-minus-button">
              <FlatButton
                label="-"
                fullWidth
                disabled={amount < 1}
                onClick={this.handleChangeAmount(-1)}
              />
            </div>
            <div className="store-item-preview__items-count">
              {amount}
            </div>
            <div className="plus-minus-button">
              <FlatButton
                label="+"
                fullWidth
                onClick={this.handleChangeAmount(1)}
              />
            </div>
          </div>
          <div
            className={`store-item-preview__sum ${this.state.amount > 0 &&
              'store-item-preview__sum_choosed'}`}
          >
            {displayedSum} {currency}
          </div>
        </div>
      </Paper>
    );
  }
}

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  currency: PropTypes.string,
};

export default ItemCard;
