import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

import { selectStoreItems } from 'pages/DashboardPage/selectors';
import foodPlaceholder from 'images/food-placeholder.jpg';

import './styles.css';

class StoreItemsList extends Component {
  getItemsWithInfo = (items) => items.map((item) => {
    const itemInfo = this.props.storeItems[item.itemId];
    if (!itemInfo) {
      return {
        ...item,
        info: {},
      };
    }

    return {
      ...item,
      info: itemInfo,
    };
  })

  render() {
    return (
      <div className="store-items-list">
        {
          this.getItemsWithInfo(this.props.items).map((item) =>
            <Paper key={item.itemId} zDepth={1} className="store-items-list__item">
              <div className="store-items-list__item__content">
                <div
                  className="store-items-list__item__image"
                  style={{
                    backgroundImage:
                      `url(${item.info.imageUrl}), url(${foodPlaceholder})`,
                  }}
                >
                </div>
                <div className="store-items-list__item__text">
                  <div className="store-items-list__item__name">
                    {item.info.name}
                    {
                      item.number > 1 &&
                      <span className="store-items-list__item__amount">
                        x{item.number}
                      </span>
                    }
                  </div>
                  <div className="store-items-list__item__description">
                    {item.info.description}
                  </div>
                </div>
              </div>
              <div className="store-items-list__item__prices">
                <div className="store-items-list__item__price-per-one">
                  {item.info.price} {item.info.currency}
                </div>
                <div className="store-items-list__item__total-price">
                  {item.price} {item.info.currency}
                </div>
              </div>
            </Paper>
          )
        }
      </div>
    );
  }
}

StoreItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  storeItems: PropTypes.object,
};

const mapStateToProps = (state) => ({
  storeItems: selectStoreItems(state),
});


export default connect(mapStateToProps)(StoreItemsList);
