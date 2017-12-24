import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { logOutRequest } from 'containers/App/actions';
import SideBar from 'containers/Purchases/SideBar';
import GroupsModal from 'containers/GroupsModal';
import PurchaseInfo from 'containers/Purchases/PurchaseInfo';
import CreatePurchaseStep2 from 'containers/Purchases/CreatePurchase/CreatePurchaseStep2';
import DashboardWelcome from 'components/DashboardWelcome';
import LoggedLayout from 'components/layouts/LoggedLayout';

import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import { getUsersRequest, getGroupsRequest } from 'pages/common/actions';

import {
  setCurrentPurchase,
  setPageState,
  setPendingPurchase,
  setPendingPurchaseParticipants,
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

    if (pageState.state === PAGE_STATES.createPurchase) {
      const queryData = pageState.data;
      this.props.setPendingPurchaseParticipants(queryData.participants);
      this.props.setPendingPurchase({ name: queryData.name });
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
            {
              this.props.pageState === PAGE_STATES.createPurchase &&
              <CreatePurchaseStep2 />
            }
          </div>
        <GroupsModal />
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
  setPendingPurchase: PropTypes.func,
  setPendingPurchaseParticipants: PropTypes.func,
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
  setPendingPurchase,
  setPendingPurchaseParticipants,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
