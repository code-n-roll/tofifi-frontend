import React from 'react';
import AddPurchaseButton from 'components/Purchases/AddPurchaseButton';
import PurhcasesList from 'containers/Purchases/PurchasesList';

const sideBarStyles = {
  float: 'left',
  minWidth: 200,
  borderRight: '1px solid #d3d3d3',
  borderLeft: '1px solid #d3d3d3',
  height: '100%',
  overflowY: 'scroll',
};

const PurhcasesSideBar = () => (
  <div style={sideBarStyles}>
    <PurhcasesList />
    <AddPurchaseButton />
  </div>
);

export default PurhcasesSideBar;
