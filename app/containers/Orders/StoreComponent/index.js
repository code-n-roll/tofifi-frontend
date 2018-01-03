import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';
import { List as ImmutableList } from 'immutable';
import CustomScroll from 'react-custom-scroll';

import { updateChoosedItems } from 'pages/DashboardPage/actions';
import { selectStoreContent, selectChoosedItems } from 'pages/DashboardPage/selectors';
import SelectableList from './SelectableList';
import ItemCard from './ItemCard';
import './styles.css';

class StoreComponent extends Component {
  state = {
    selectedCategoryIndex: 0,
  }

  handleListClick = (e, index) => {
    this.setState({
      selectedCategoryIndex: index,
    });
  };

  handleSelectItem = (id, amount, sum) => {
    const choosedItems = this.props.choosedItems.toJS();
    console.log(choosedItems, this.props.choosedItems, this.props.choosedItems.length);
    const existingItemIndex =
      _.findIndex(choosedItems, (item) => item.id === id);

    const newItem = {
      id,
      amount,
      sum,
    };

    if (amount > 0) {
      if (existingItemIndex === -1) {
        choosedItems.push(newItem);
      } else {
        choosedItems[existingItemIndex] = newItem;
      }
    } else {
      choosedItems.splice(existingItemIndex, 1);
    }


    this.props.updateChoosedItems(choosedItems);
  }

  render() {
    const { storeContent } = this.props;
    const { selectedCategoryIndex } = this.state;

    let itemsToShow;
    if (storeContent && storeContent.categories && selectedCategoryIndex !== null) {
      itemsToShow = (
        <div className="store-component__items">
          {
            storeContent.categories[selectedCategoryIndex].items.map((item) =>
              <ItemCard
                className="store-component__item"
                key={item.id}
                {...item}
                onSelectItem={this.handleSelectItem}
              />
            )
          }
        </div>
      );
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
            storeContent && storeContent.categories &&
            <SelectableList
              defaultValue={this.state.selectedCategoryIndex}
              onChange={this.handleListClick}
            >
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
          <CustomScroll heightRelativeToParent="100%">
            {itemsToShow}
          </CustomScroll>
          <div className="store-component__bottom-row">
            <RaisedButton
              label="Submit order"
              disabled={this.props.choosedItems.size === 0}
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
  onSubmitOrder: PropTypes.func.isRequired,

  storeContent: PropTypes.object,
  choosedItems: PropTypes.instanceOf(ImmutableList),
  updateChoosedItems: PropTypes.func,
};

const mapStateToProps = (state) => ({
  storeContent: selectStoreContent(state),
  choosedItems: selectChoosedItems(state),
});

const mapDispatchToProps = {
  updateChoosedItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreComponent);
