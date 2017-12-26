import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardHeader, CardActions, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './styles.css';

class ItemCard extends Component {
  state = {
    amount: 0
  };

  render() {
    let { id, name, description, price, imageUrl } = this.props;
    let { amount } = this.state;
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
            <FlatButton label="-"
              fullWidth={true}
              onClick={this.handleChangeAmount(-1)}
            />
          </div>
          <span>{amount}</span>
          <div className="plus-minus-button">
            <FlatButton label="+"
              fullWidth={true}
              onClick={this.handleChangeAmount(1)}
            />
          </div>
        </CardActions>
      </Card>
    );
  }

  handleChangeAmount = diff => e => {
    let { id, price } = this.props;

    const prevAmount = this.state.amount;
    const nextAmount = prevAmount + diff;

    if (nextAmount >= 0 && nextAmount < 100) {
      this.setState({
        amount: nextAmount
      });
    }

    this.props.onSelectItem(id, nextAmount, price * nextAmount);
  }
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired
};

export default ItemCard;
