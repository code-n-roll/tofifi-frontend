import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

import { fetchStoreContentRequest } from 'pages/DashboardPage/actions';
import { selectStoreContent } from 'pages/DashboardPage/selectors';
import SelectableList from './SelectableList';
import ItemCard from './ItemCard';
import './styles.css';

class StoreComponent extends Component {
  state = {
    selectedCategoryIndex: null,
    selectedItems: [],
  }

  componentWillMount() {
    this.props.fetchStoreContentRequest(this.props.purchase.storeOrder.storeId);
  }

  handleListClick = (e, index) => {
    this.setState({
      selectedCategoryIndex: index,
    });
  };

  handleSelectItem = (id, amount, sum) => {
    const selectedItems = this.state.selectedItems;
    const existingItemIndex =
      _.findIndex(selectedItems, (item) => item.id === id);

    const newItem = {
      id,
      amount,
      sum,
    };

    if (existingItemIndex === -1) {
      selectedItems.push(newItem);
    } else {
      selectedItems[existingItemIndex] = newItem;
    }

    this.setState({
      selectedItems,
    });
  }

  render() {
    const { storeContent } = this.props;
    const { selectedCategoryIndex } = this.state;

    let itemsToShow;
    if (storeContent && storeContent.categories && selectedCategoryIndex !== null) {
      itemsToShow =
        (<div className="store-component__items">
          {
            storeContent.categories[selectedCategoryIndex].items.map((item) =>
              <div className="store-component__item">
                <ItemCard {...item} onSelectItem={this.handleSelectItem} />
              </div>
            )
          }
        </div>);
    } else {
      itemsToShow = (
        <div>
          Select category
        </div>
      );
    }

    return (
      <div className="store-component">
        <div className="store-component__sidebar">
          {
            storeContent &&
            <SelectableList defaultValue={null} onChange={this.handleListClick}>
              {
                storeContent.categories.map((category, index) =>
                  <ListItem
                    key={category.id}
                    value={index}
                    primaryText={category.name}
                  ></ListItem>
                )
              }
            </SelectableList>
          }
        </div>
        <div className="store-component__main-content">
          {itemsToShow}
          <div className="store-component__bottom-row">
            <RaisedButton
              label="Submit order"
              primary
              onClick={this.props.onSubmitOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

StoreComponent.propTypes = {
  purchase: PropTypes.object.isRequired,
  storeContent: PropTypes.object,
  onSubmitOrder: PropTypes.func.isRequired,

  fetchStoreContentRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  storeContent: selectStoreContent(state),
});

const mapDispatchToProps = {
  fetchStoreContentRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreComponent);
