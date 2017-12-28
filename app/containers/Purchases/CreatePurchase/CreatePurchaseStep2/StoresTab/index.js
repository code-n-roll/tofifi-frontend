import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { fetchStoresRequest, createStoreOrderRequest } from 'pages/DashboardPage/actions';
import { selectStoresList } from 'pages/DashboardPage/selectors';
import SelectableCard from './SelectableCard';
import './styles.css';

class StoresTab extends Component {
  state = {
    selectedId: null
  };

  componentWillMount() {
    this.props.fetchStoresRequest();
  }

  render() {
    let { selectedId } = this.state;
    return (
      <div className="stores-tab">
        <div className="stores-tab__list">
          {
            this.props.stores
              ? this.props.stores.map(store =>
                <SelectableCard id={store.id}
                  name={store.name}
                  imageUrl="https://www.underconsideration.com/brandnew/archives/sbarro_logo_detail.png"
                  onClick={this.handleStoreCardClick(store.id)}
                  selected={store.id === selectedId}
                  key={store.id}
                />
              )
              : <div>No available stores</div>
          }
        </div>
        <div className="stores-tab__bottom-row">
          <FlatButton label="Cancel" secondary={true} onClick={this.props.onCancelClick}/>
          <RaisedButton
            onClick={this.handleSubmitClick}
            label="Create order"
            primary={true}
            disabled={ selectedId === null }
          />
        </div>
      </div>
    );
  }

  handleStoreCardClick = id => e => {
    this.setState({
      selectedId: id
    });
    console.log(`clicked ${id}`);
  }

  handleSubmitClick = () => {
    this.props.createStoreOrderRequest(this.state.selectedId)
  }
}

StoresTab.propTypes = {
  stores: PropTypes.array,
  fetchStoresRequest: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  stores: selectStoresList(state)
});

const mapDispatchToProps = {
  fetchStoresRequest,
  createStoreOrderRequest
};

StoresTab = connect(mapStateToProps, mapDispatchToProps)(StoresTab);

export default StoresTab;
