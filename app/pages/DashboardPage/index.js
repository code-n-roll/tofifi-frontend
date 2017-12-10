import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { logOutRequest } from 'containers/App/actions';
import SideBar from 'containers/Purchases/SideBar';
import PurchaseInfo from 'containers/Purchases/PurchaseInfo';
import DashboardWelcome from 'components/DashboardWelcome';
import LoggedLayout from 'components/layouts/LoggedLayout';
import GraySection from 'components/sections/GraySection';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import { getUsersRequest, getGroupsRequest } from 'pages/common/actions';

import {
  setCurrentPurchase,
  setPageState,
} from './actions';

import { makeSelectPageState } from './selectors';

import { PAGE_STATES } from './constants';

import { getPageStateFromQuery } from './helpers';


class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  componentWillMount() {
    this.handleQueryChange(this.props.location.query);
    this.props.getUsersRequest();
    this.props.getGroupsRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query !== this.props.location.query) {
      this.handleQueryChange(nextProps.location.query);
    }
  }

  handleQueryChange(query) {
    const pageState = getPageStateFromQuery(query);
    this.props.setPageState(pageState.state);

    if (pageState.state === PAGE_STATES.purchaseInfo) {
      this.props.setCurrentPurchase(pageState.data);
    } else {
      this.props.setCurrentPurchase(null);
    }
  }

  handleLogOut() {
    this.props.logOutRequest();
  }

  render() {
    return (
      <LoggedLayout onLogOut={this.handleLogOut}>
        <OnScreenHeightSection style={{ height: 'calc(100vh - 70px)', borderBottom: '1px solid #dcdcdc' }}>
          <SideBar />
          <div className="purchase-viewer">
            {
              this.props.pageState === PAGE_STATES.purchaseInfo &&
              <PurchaseInfo />
            }
            {
              this.props.pageState === PAGE_STATES.welcome &&
              <DashboardWelcome />
            }
          </div>
        </OnScreenHeightSection>
      </LoggedLayout>
    );
  }
}

DashboardPage.propTypes = {
  logOutRequest: PropTypes.func,
  setCurrentPurchase: PropTypes.func,
  setPageState: PropTypes.func,
  getUsersRequest: PropTypes.func,
  getGroupsRequest: PropTypes.func,
  pageState: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  pageState: makeSelectPageState(),
});

const mapDispatchToProps = {
  logOutRequest,
  setCurrentPurchase,
  setPageState,
  getUsersRequest,
  getGroupsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
