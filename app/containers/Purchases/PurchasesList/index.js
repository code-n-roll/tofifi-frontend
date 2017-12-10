import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _ from 'lodash';

import { getPurchasesRequest } from 'pages/DashboardPage/actions';
import {
  makeSelectPurchasesList,
  makeSelectCurrentPurchase,
} from 'pages/DashboardPage/selectors';
import PurchaseItem from 'components/Purchases/PurchaseItem';

class PurchasesList extends Component {
  componentWillMount() {
    this.props.getPurchasesRequest();
  }

  render() {
    const { purchasesList, currentPurchase } = this.props;

    return (
      <div>
        {purchasesList.map((purchase) => (
          <Link to={`?purchase=${purchase.id}`}>
            <PurchaseItem
              {...purchase}
              active={_.get(currentPurchase, 'id') === purchase.id}
            />
          </Link>
        ))}
      </div>
    );
  }
}

PurchasesList.propTypes = {
  purchasesList: PropTypes.array,
  getPurchasesRequest: PropTypes.func,
  currentPurchase: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  purchasesList: makeSelectPurchasesList(),
  currentPurchase: makeSelectCurrentPurchase(),
});

const mapDispatchToProps = {
  getPurchasesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchasesList);
