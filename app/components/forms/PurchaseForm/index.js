import React, { Component } from 'react';
import { reduxForm, Field, FieldArray, change } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import InputControl from 'components/controls/InputControl';
import { required } from 'components/forms/validations';
import PurchaseParticipantsList from './PurchaseParticipantsList';

const FORM_NAME = 'PurchaseForm';

class PurchaseForm extends Component {

  constructor(args) {
    super(args);

    this.renderParticipantsList = this.renderParticipantsList.bind(this);
    this.handleTotalSumChange = this.handleTotalSumChange.bind(this);
  }

  handleTotalSumChange(value) {
    const participantValue = value / this.props.participants.length;
    this.props.participants.forEach((participant) => {
      this.props.dispatch(change(FORM_NAME, `${participant.id}.sum`, participantValue));
    });
  }

  renderParticipantsList() {
    return (
      <PurchaseParticipantsList participants={this.props.participants} />
    );
  }

  render() {
    const { props } = this;

    return (
      <form>
        <div style={{ paddingBottom: '10px' }}>
          <Field
            name="totalSum"
            placeholder="Total sum"
            component={InputControl}
            onValueChange={(e) => this.handleTotalSumChange(e.target.value)}
            validate={[required]}
          />
          <FieldArray name={'users'} component={this.renderParticipantsList} />
        </div>
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
  dispatch: PropTypes.func,
};

export default reduxForm({
  form: FORM_NAME,
})(PurchaseForm);
