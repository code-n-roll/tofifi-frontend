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
    selectedId: null,
  };

  componentWillMount() {
    this.props.fetchStoresRequest();
  }

  handleStoreCardClick = (id) => () => {
    this.setState({
      selectedId: id,
    });
  }

  handleSubmitClick = () => {
    this.props.createStoreOrderRequest(this.state.selectedId);
  }

  render() {
    const { selectedId } = this.state;
    return (
      <div className="stores-tab">
        <div className="stores-tab__list">
          {
            this.props.stores
              ? this.props.stores.map((store) =>
                <SelectableCard
                  id={store.id}
                  name={store.name}
                  imageUrl={store.imageUrl}
                  onClick={this.handleStoreCardClick(store.id)}
                  selected={store.id === selectedId}
                  key={store.id}
                />
              )
              : <div>No available stores</div>
          }
        </div>
        <div className="stores-tab__bottom-row">
          <FlatButton label="Cancel" secondary onClick={this.props.onCancelClick} />
          <RaisedButton
            onClick={this.handleSubmitClick}
            label="Create order"
            primary
            disabled={selectedId === null}
          />
        </div>
      </div>
    );
  }
}

StoresTab.propTypes = {
  stores: PropTypes.object,
  fetchStoresRequest: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func,

  createStoreOrderRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stores: selectStoresList(state),
});

const mapDispatchToProps = {
  fetchStoresRequest,
  createStoreOrderRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresTab);
