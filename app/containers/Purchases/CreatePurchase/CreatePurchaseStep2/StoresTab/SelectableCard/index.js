import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import './styles.css';

class SelectableCard extends Component {
  render() {
    let { name, imageUrl, selected, onClick } = this.props;

    return (
      <a onClick={onClick}>
        <Card className={`store-card ${selected ? 'store-card__selected' : ''}`}>
          <CardMedia
            overlay={<CardTitle title={name} />}
          >
            <img src={imageUrl} alt={name} />
          </CardMedia>
        </Card>
      </a>
    );
  }
}

SelectableCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default SelectableCard;
