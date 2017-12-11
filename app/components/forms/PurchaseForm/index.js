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
      <form className="fill-parent" onSubmit={props.handleSubmit(createPurchase)}>
        <div className="create-purchase-tabs mdl-tabs mdl-js-tabs  mdl-js-ripple-effect">
          <div className="mdl-tabs__tab-bar">
            <a href="#starks-panel" className="mdl-tabs__tab is-active">Custom price</a>
            <a href="#lannisters-panel" className="mdl-tabs__tab">Chooser</a>
            <a href="#targaryens-panel" className="mdl-tabs__tab">Market</a>
          </div>
        </div>

        <FieldArray name={'users'} component={this.renderParticipantsList} />
        <div className="create-purchase-total-sum-container">
          <span className="create-purchase-total-sum_text input-label">Amount: </span>
          <Field
            name="totalSum"
            style={{ width: 150 }}
            component={InputControl}
            onValueChange={(e) => this.handleTotalSumChange(e.target.value)}
            validate={[required]}
          />
        </div>
        <div className="create-purchase-buttons-container">
          <button className="mdl-button mdl-js-button mdl-button--raised" style={{ marginRight: 40 }}> Decline </button>
          <button className="mdl-button mdl-js-button mdl-button--raised bg-green text-white"
                  disabled={props.submitting || props.invalid}
                  type="submit"> Сreate </button>
        </div>
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
