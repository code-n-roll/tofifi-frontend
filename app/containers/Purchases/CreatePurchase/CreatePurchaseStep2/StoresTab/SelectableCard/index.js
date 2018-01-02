import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import storeImagePlacehoder from 'images/store-placeholder.png';
import './styles.css';

const SelectableCard = (props) => {
  const { name, imageUrl, selected, onClick } = props;

  return (
    <Paper
      onClick={onClick}
      className={`store-card ${selected ? 'store-card__selected' : ''}`}
    >
      <div
        className="store-card__wrapper"
        style={{ backgroundImage: `url(${imageUrl}), url(${storeImagePlacehoder})` }}
      >
        <div className="store-card__name-wrapper">
          <span className="store-card__name">{name}</span>
        </div>
      </div>
    </Paper>
  );
};

SelectableCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default SelectableCard;
