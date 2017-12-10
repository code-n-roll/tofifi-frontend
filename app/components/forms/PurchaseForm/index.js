import React, { Component } from 'react';
import { reduxForm, Field, FieldArray, change, formValueSelector } from 'redux-form/immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import InputControl from 'components/controls/InputControl';
import { required } from 'components/forms/validations';
import Checkbox from 'components/Checkbox';
import PurchaseParticipantsList from './PurchaseParticipantsList';
import { createPurchase } from './actions';

const FORM_NAME = 'PurchaseForm';

class PurchaseForm extends Component {

  constructor(args) {
    super(args);

    this.renderParticipantsList = this.renderParticipantsList.bind(this);
    this.handleTotalSumChange = this.handleTotalSumChange.bind(this);

    this.state = {
      equallySplit: true,
    };
  }

  handleChangeSplitType() {
    if (this.state.equallySplit) {
      this.handleTotalSumChange('', true);
    } else {
      this.handleTotalSumChange(this.props.totalSum, true);
    }

    this.setState({ equallySplit: !this.state.equallySplit });
  }

  handleTotalSumChange(value, equallySplitted = false) {
    if (equallySplitted || this.state.equallySplit) {
      const totalSum = Number.parseFloat(value);
      const participantValue = _.isFinite(totalSum) ?
        Math.floor(((totalSum / this.props.participants.length) * 1000) + 1) / 1000 :
        '';

      this.props.participants.forEach((participant) => {
        this.props.dispatch(change(FORM_NAME, `users.${participant.id}.sum`, participantValue));
      });
    }
  }

  renderParticipantsList() {
    return (
      <PurchaseParticipantsList participants={this.props.participants} />
    );
  }

  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(createPurchase)}>
        <div style={{ float: 'left', maxWidth: 300, padding: 20 }}>
          <div style={{ paddingBottom: '10px' }}>
            <span className="input-label">Name</span>
            <Field
              name="name"
              component={InputControl}
              style={{ width: 150 }}
              validate={[required]}
            />
          </div>
          <div style={{ paddingBottom: '10px' }}>
            <span className="input-label">Amount</span>
            <Field
              name="totalSum"
              component={InputControl}
              style={{ width: 150 }}
              onValueChange={(e) => this.handleTotalSumChange(e.target.value)}
              validate={[required]}
            />
          </div>
          <div>
            <span>Split total sum equally</span>
            <Checkbox
              id="create-purchase-equally-split"
              checked={this.state.equallySplit}
              onChange={() => !this.state.equallySplit && this.handleChangeSplitType()}
            />
          </div>
          <div>
            <span>Select price for users</span>
            <Checkbox
              checked={!this.state.equallySplit}
              id="create-purchase-custom-split"
              onChange={() => this.state.equallySplit && this.handleChangeSplitType()}
            />
          </div>
        </div>
        <FieldArray name={'users'} component={this.renderParticipantsList} />
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-green text-white big-btn big-btn-margin"
          disabled={props.submitting || props.invalid}
          type="submit"
        >
          Create purchase
        </button>
      </form>
    );
  }
}

PurchaseForm.propTypes = {
  participants: PropTypes.array,
  totalSum: PropTypes.string,
  dispatch: PropTypes.func,
};

const selector = formValueSelector(FORM_NAME);
const mapStateToProps = (state) => ({
  totalSum: selector(state, 'totalSum'),
});

const PurchaseFormRedux = reduxForm({
  form: FORM_NAME,
})(PurchaseForm);

export default connect(mapStateToProps)(PurchaseFormRedux);
