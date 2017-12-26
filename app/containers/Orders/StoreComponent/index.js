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
    selectedItems: []
  }

  componentWillMount() {
    this.props.fetchStoreContentRequest();
  }

  render() {
    let { storeContent } = this.props;
    let { selectedCategoryIndex } = this.state;

    let itemsToShow;
    if (storeContent && storeContent.categories && selectedCategoryIndex !== null) {
      itemsToShow =
        <div className="store-component__items">
          {
            storeContent.categories[selectedCategoryIndex].items.map(item =>
              <div className="store-component__item">
                <ItemCard {...item} onSelectItem={this.handleSelectItem}/>
              </div>
            )
          }
        </div>
    } else {
      itemsToShow = (
        <div>
          Select category
        </div>
      )
    }

    return (
      <div className="store-component">
        <div className="store-component__sidebar">
          {
            storeContent &&
            <SelectableList defaultValue={null} onChange={this.handleListClick}>
              {
                storeContent.categories.map((category, index) =>
                  <ListItem key={category.id}
                    value={index}
                    primaryText={category.name}></ListItem>
                )
              }
            </SelectableList>
          }
        </div>
        <div className="store-component__main-content">
          {itemsToShow}
          <div className="store-component__bottom-row">
            <RaisedButton label="Submit order"
              primary={true}
              onClick={this.handleSubmitClick}
            />
          </div>
        </div>
      </div>
    );
  }

  handleListClick = (e, index) => {
    this.setState({
      selectedCategoryIndex: index,
    });
  };

  handleSubmitClick = () => {
    console.log(this.state.selectedItems);
  }

  handleSelectItem = (id, amount, sum) => {
    const selectedItems = this.state.selectedItems;
    const existingItemIndex =
      _.findIndex(selectedItems, item => item.id === id);

    const newItem = {
      id,
      amount,
      sum
    };

    if (existingItemIndex === -1) {
      selectedItems.push(newItem);
    } else {
      selectedItems[existingItemIndex] = newItem
    }

    this.setState({
      selectedItems
    });
  }
}

StoreComponent.propTypes = {
  purchase: PropTypes.object.isRequired,
  storeContent: PropTypes.object
};

const mapStateToProps = (state) => ({
  storeContent: selectStoreContent(state)
});

const mapDispatchToProps = {
  fetchStoreContentRequest
};

StoreComponent = connect(mapStateToProps, mapDispatchToProps)(StoreComponent);

export default StoreComponent;
