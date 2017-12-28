import React, { Component } from 'react';
import { reduxForm, Field, FieldArray, change, formValueSelector } from 'redux-form/immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import InputControl from 'components/controls/InputControl';
import { required } from 'components/forms/validations';
import { onlyDecimal } from 'components/forms/normalizers';
import PurchaseParticipantsList from './PurchaseParticipantsList';
import { createPurchase } from './actions';
import FlatButton from 'material-ui/FlatButton';

const FORM_NAME = 'PurchaseForm';

class PurchaseForm extends Component {

  constructor(args) {
    super(args);

    this.renderParticipantsList = this.renderParticipantsList.bind(this);
    this.handleTotalSumChange = this.handleTotalSumChange.bind(this);
    this.handleParticipantValueChange = this.handleParticipantValueChange.bind(this);
  }

  handleTotalSumChange(value) {
    const totalSum = Number.parseFloat(value);
    const participantValue = _.isFinite(totalSum) ?
      Math.floor(((totalSum / this.props.participants.length) * 1000)) / 1000 :
      '';

    this.props.participants.forEach((participant) => {
      this.props.dispatch(change(FORM_NAME, `users.${participant.id}.sum`, participantValue));
    });
  }

  handleParticipantValueChange(participantId, value) {
    if (!this.props.usersSums) {
      return;
    }

    const participantValue = value === '' ? 0 : Math.floor(Number.parseFloat(value) * 100) / 100;
    const usersSums = this.props.usersSums.toJS();
    let newTotalSum = participantValue;

    Object.keys(usersSums).forEach((key) => {
      if (usersSums.hasOwnProperty(key) && key != participantId) {
        newTotalSum += Number.parseFloat(usersSums[key].sum);
      }
    });

    newTotalSum = Math.floor(newTotalSum * 100) / 100;
    this.props.dispatch(change(FORM_NAME, 'totalSum', newTotalSum));
  }

  renderParticipantsList() {
    return (
      <PurchaseParticipantsList
        participants={this.props.participants}
        onAnyParticipantValueChange={this.handleParticipantValueChange}
      />
    );
  }

  render() {
    const { props } = this;

    return (
      <form className="fill-parent create-purchase-form" onSubmit={props.handleSubmit(createPurchase)}>
        <FieldArray name={'users'} component={this.renderParticipantsList} />
        <div className="create-purchase-total-sum-container">
          <span className="create-purchase-total-sum_text input-label">Amount: </span>
          <Field
            name="totalSum"
            style={{ width: 150 }}
            component={InputControl}
            onValueChange={(e) => this.handleTotalSumChange(e.target.value)}
            validate={[required]}
            inputStyle={{ textAlign: 'center' }}
            placeholderStyle={{ textAlign: 'center' }}
            normalize={onlyDecimal}
          />
        </div>
        <div className="create-purchase-buttons-container">
          <FlatButton
            label="Decline"
            secondary={true}
            onClick={this.props.onCancelClick}
            style={{ marginRight: 20 }}/>

          <FlatButton
            label="Сreate"
            primary={true}
            disabled={props.submitting || props.invalid}
            onClick={() => this.setState({ step: 2 })}
            type="submit"/>
        </div>
      </form>
    );
  }
}

PurchaseForm.propTypes = {
  participants: PropTypes.array,
  totalSum: PropTypes.string,
  usersSums: PropTypes.object,
  dispatch: PropTypes.func,
  onCancelClick: PropTypes.func,
};

const selector = formValueSelector(FORM_NAME);
const mapStateToProps = (state) => ({
  totalSum: selector(state, 'totalSum'),
  usersSums: selector(state, 'users'),
});

const PurchaseFormRedux = reduxForm({
  form: FORM_NAME,
})(PurchaseForm);

export default connect(mapStateToProps)(PurchaseFormRedux);
