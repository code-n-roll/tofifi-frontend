import React, { Component } from 'react';
import PurhcasesList from 'containers/Purchases/PurchasesList';
import CreatePurchaseStep1 from 'containers/Purchases/CreatePurchase/CreatePurchaseStep1';
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
  constructor(props) {
    super(props);

    this.handleCreatePurchaseCancelClick = this.handleCreatePurchaseCancelClick.bind(this);

    this.state = {
      createPurchase: false,
    };
  }

  handleCreatePurchaseCancelClick() {
    this.setState({ createPurchase: false });
  }

  render() {
    return (
      <div style={sideBarStyles}>
        {this.state.createPurchase ?
          <CreatePurchaseStep1 onCancelClick={this.handleCreatePurchaseCancelClick} /> :
          <PurhcasesList onPlusClick={() => this.setState({ createPurchase: true })} />
        }
      </div>
    );
  }
}

export default SideBar;
