import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AlertContainer from 'react-alert';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { logOutRequest } from 'containers/App/actions';
import SideBar from 'containers/Purchases/SideBar';
import GroupsModal from 'containers/GroupsModal';
import SettingsModal from 'containers/SettingsModal';
import PurchaseInfo from 'containers/Purchases/PurchaseInfo';
import CreatePurchaseStep2 from 'containers/Purchases/CreatePurchase/CreatePurchaseStep2';
import DashboardWelcome from 'components/DashboardWelcome';
import LoggedLayout from 'components/layouts/LoggedLayout';
import PayOffDebtModal from 'containers/PayOffDebtModal';

import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import { getUsersRequest, getGroupsRequest, setGroupModalState, setSettingsModalState, setGlobalError, setGlobalSuccessMsg } from 'pages/common/actions';
import { makeSelectGlobalError, makeSelectGlobalSuccessMsg } from 'pages/common/selectors';

import {
  setCurrentPurchase,
  setPageState,
  setPendingPurchase,
  setPendingPurchaseParticipants,
  getDebtorsStatisticsRequest,
} from './actions';

import { makeSelectPageState, makeSelectDebtorsStatistics } from './selectors';


import { PAGE_STATES } from './constants';

import { getPageStateFromQuery } from './helpers';

const DashboardPageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const PurchaseViewer = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #d3d3d3;
  background: white;
`;

const alertOptions = {
  offset: 14,
  position: 'bottom right',
  theme: 'dark',
  time: 5000,
  transition: 'scale',
};

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleGroupLinkClick = this.handleGroupLinkClick.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handleSnackbarRequestClose = this.handleSnackbarRequestClose.bind(this);
  }

  componentWillMount() {
    this.handleQueryChange(this.props.location.query);
    this.props.getUsersRequest();
    this.props.getGroupsRequest();
    this.props.getDebtorsStatisticsRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query !== this.props.location.query) {
      this.handleQueryChange(nextProps.location.query);
    }

    if (nextProps.globalError) {
      this.msg.show(nextProps.globalError, {
        time: 2000,
        type: 'error',
      });
      this.props.setGlobalError(null);
    }

    if (nextProps.globalSuccessMsg) {
      this.msg.success(nextProps.globalSuccessMsg, {
        time: 2000,
      });
      this.props.setGlobalSuccessMsg(null);
    }
  }

  handleGroupLinkClick() {
    this.props.setGroupModalState(true);
  }

  handleSettingsClick() {
    this.props.setSettingsModalState(true);
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

  handleSnackbarRequestClose() {
    this.props.setGlobalError(null);
  }

  handleLogOut() {
    this.props.logOutRequest();
  }

  render() {
    return (
      <LoggedLayout
        onLogOut={this.handleLogOut}
        onGroupLinkClick={this.handleGroupLinkClick}
        onSettingsClick={this.handleSettingsClick}
      >
        <OnScreenHeightSection style={{ height: 'calc(100vh - 70px)', borderBottom: '1px solid #dcdcdc' }}>
          <DashboardPageWrapper>
            <SideBar debtsStatistic={this.props.debtsStatistic} />
            <PurchaseViewer>
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
            </PurchaseViewer>
          </DashboardPageWrapper>
        </OnScreenHeightSection>
        <GroupsModal />
        <SettingsModal />
        <PayOffDebtModal />
        <AlertContainer ref={(a) => { this.msg = a; }} {...alertOptions} />
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
  setGroupModalState: PropTypes.func,
  setSettingsModalState: PropTypes.func,
  getDebtorsStatisticsRequest: PropTypes.func,
  globalError: PropTypes.string,
  setGlobalError: PropTypes.func,
  setGlobalSuccessMsg: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  pageState: makeSelectPageState(),
  debtsStatistic: makeSelectDebtorsStatistics(),
  globalError: makeSelectGlobalError(),
  globalSuccessMsg: makeSelectGlobalSuccessMsg(),
});

const mapDispatchToProps = {
  logOutRequest,
  setCurrentPurchase,
  setPageState,
  getUsersRequest,
  getGroupsRequest,
  setPendingPurchase,
  setPendingPurchaseParticipants,
  setGroupModalState,
  setSettingsModalState,
  getDebtorsStatisticsRequest,
  setGlobalError,
  setGlobalSuccessMsg,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
