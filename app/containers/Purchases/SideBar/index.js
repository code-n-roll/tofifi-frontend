import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PurhcasesList from 'containers/Purchases/PurchasesList';
import { makeSelectPageState } from 'pages/DashboardPage/selectors';
import CreatePurchase from 'containers/Purchases/CreatePurchase';
import { PAGE_STATES } from 'pages/DashboardPage/constants';


const sideBarStyles = {
  float: 'left',
  width: 300,
  borderRight: '1px solid #d3d3d3',
  borderLeft: '1px solid #d3d3d3',
  height: '100%',
  backgroundColor: '#fff',
};

class SideBar extends Component {
  render() {
    return (
      <div style={sideBarStyles}>
        { this.props.pageState !== PAGE_STATES.createPurchase && (
          <PurhcasesList />
        )}
        {
          this.props.pageState === PAGE_STATES.createPurchase && (
          <CreatePurchase />
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  pageState: makeSelectPageState(),
});

export default connect(mapStateToProps)(SideBar);
