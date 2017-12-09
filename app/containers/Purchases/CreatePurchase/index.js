import React, { Component } from 'react';
import CreatePurchaseStep1 from './CreatePurchaseStep1';

class CreatePurchase extends Component {
  render() {
    return (
      <div>
        Create new purchase
        <CreatePurchaseStep1 />
      </div>
    );
  }
}

export default CreatePurchase;
