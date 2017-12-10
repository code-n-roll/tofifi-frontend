import React, { Component } from 'react';
import CreatePurchaseStep1 from './CreatePurchaseStep1';
import CreatePurchaseStep2 from './CreatePurchaseStep2';


class CreatePurchase extends Component {
  constructor(props) {
    super(props);

    this.handleGoToNextStep = this.handleGoToNextStep.bind(this);

    this.state = {
      selectedUsers: null,
      step: 1,
    };
  }

  handleGoToNextStep(selectedUsers) {
    this.setState({
      selectedUsers,
      step: 2,
    });
  }

  render() {
    return (
      <div>
        <h3>Create new purchase</h3>
        {
          this.state.step === 1 && (
            <CreatePurchaseStep1 goToNextStep={this.handleGoToNextStep} />
          )
        }
        {
          this.state.step === 2 && (
            <CreatePurchaseStep2 participants={this.state.selectedUsers} />
          )
        }
      </div>
    );
  }
}

export default CreatePurchase;
