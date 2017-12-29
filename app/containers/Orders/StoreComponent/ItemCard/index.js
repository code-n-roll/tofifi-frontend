import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
    const { name, description, imageUrl } = this.props;
    const { amount } = this.state;
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={name} subtitle={description} />}
        >
          <div className="store-item-preview">
            <img className="store-item-preview" src={imageUrl} alt={name} />
          </div>
        </CardMedia>
        <CardActions>
          <div className="plus-minus-button">
            <FlatButton
              label="-"
              fullWidth
              onClick={this.handleChangeAmount(-1)}
            />
          </div>
          <span>{amount}</span>
          <div className="plus-minus-button">
            <FlatButton
              label="+"
              fullWidth
              onClick={this.handleChangeAmount(1)}
            />
          </div>
        </CardActions>
      </Card>
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
};

export default ItemCard;
