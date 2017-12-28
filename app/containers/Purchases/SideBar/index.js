import React, { Component } from 'react';
import classNames from 'classnames';
import PurhcasesList from 'containers/Purchases/PurchasesList';
import CreatePurchaseStep1 from 'containers/Purchases/CreatePurchase/CreatePurchaseStep1';
import { PAGE_STATES } from 'pages/DashboardPage/constants';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

import data from './data';
import Debtors from './Debtors';

const sideBarStyles = {
  float: 'left',
  width: 390,
  borderRight: '1px solid #d3d3d3',
  borderLeft: '1px solid #d3d3d3',
  height: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  paddingLeft: 90,
};


class SideBar extends Component {
  constructor(props) {
    super(props);

    this.handleCreatePurchaseCancelClick = this.handleCreatePurchaseCancelClick.bind(this);
    this.toggleDebtorsPanel = this.toggleDebtorsPanel.bind(this);

    this.state = {
      createPurchase: false,
      debtorsOpened: false,
    };
  }

  handleCreatePurchaseCancelClick() {
    this.setState({ createPurchase: false });
  }

  toggleDebtorsPanel() {
    this.setState((state) => ({
      debtorsOpened: !state.debtorsOpened,
    }));
  }

  render() {
    return (
      <div style={sideBarStyles}>
        <div className={classNames('debtors-panel', { opened: this.state.debtorsOpened })}>
          <Debtors statistic={data} />
          <div
            onClick={this.toggleDebtorsPanel}
            className={'debtors-panel-toggler'}
          >

            <FaAngleDoubleRight />
          </div>
        </div>
        <div style={{ width: 300 }}>
          {this.state.createPurchase ?
            <CreatePurchaseStep1 onCancelClick={this.handleCreatePurchaseCancelClick} /> :
            <PurhcasesList onPlusClick={() => this.setState({ createPurchase: true })} />
          }
        </div>
      </div>
    );
  }
}

export default SideBar;
