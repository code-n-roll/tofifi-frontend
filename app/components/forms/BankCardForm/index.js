import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import ReactBankCard from 'react-bank-card';
import { connect } from 'react-redux';
import { required } from 'components/forms/validations';

import InputControl from 'components/controls/InputControl';
import { addBankCard } from './actions';
import * as normalizers from './normalizers';
import * as validations from './validations';
import './styles.css';

class BankCardForm extends Component {
  state = {
    highlightedPreview: {},
    flippedPreview: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitSucceeded) {
      nextProps.onSave();
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid, error, card, onCancel } = this.props;
    const { highlightedPreview, flippedPreview } = this.state;
    return (
      <form onSubmit={handleSubmit(addBankCard)}
        className="bank-card-form"
        autoComplete="off"
      >
        <div className="bank-card-form__preview">
          <ReactBankCard
            cvc={card.cvc}
            expiryMonth={card.expiryMonth}
            expiryYear={card.expiryYear}
            number={card.number}
            name={card.name}
            highlighted={highlightedPreview}
            verso={flippedPreview}
          />
        </div>
        <div>
          <div>
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Holder name"
                onFocus={this.onFieldFocus}
                normalize={normalizers.name}
                validate={[required]}
                component={InputControl}
              />
            </div>
            <div>
              <Field
                name="number"
                type="number"
                placeholder="Card number"
                onFocus={this.onFieldFocus}
                normalize={normalizers.number}
                validate={[required, validations.cardNumber]}
                component={InputControl}
              />
            </div>
            <div className="bank-card-form__cvc-row">
              <div className="bank-card-form__expiry-row">
                <Field
                  name="expiryMonth"
                  type="number"
                  placeholder="MM"
                  className="bank-card-form__small-input"
                  onFocus={this.onFieldFocus}
                  normalize={normalizers.month}
                  validate={[required]}
                  component={InputControl}
                />
                <div className="bank-card-form__expiry-divider">/</div>
                <Field
                  name="expiryYear"
                  type="number"
                  placeholder="YY"
                  className="bank-card-form__small-input"
                  onFocus={this.onFieldFocus}
                  normalize={normalizers.year}
                  validate={[required]}
                  component={InputControl}
                />
              </div>
              <Field
                name="cvc"
                type="number"
                inputProps={{max: 999}}
                placeholder="CVC"
                className="bank-card-form__small-input"
                onFocus={this.onCvcFocus}
                onBlur={this.onCvcBlur}
                normalize={normalizers.cvc}
                validate={[required, validations.cvc]}
                component={InputControl}
              />
            </div>
            <div>
              {error && <div className="">{error}</div>}
            </div>
          </div>
          <div className="bank-card-form__buttons">
            <button
              className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white"
              disabled = { pristine || submitting || invalid }
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }

  onFieldFocus = e => {
    let fieldName = e.target.name;
    this.setState({
      highlightedPreview: {
        [fieldName]: true
      }
    });
  }

  onCvcFocus = e => {
    this.setState({
      flippedPreview: true
    });
    this.onFieldFocus(e);
  }

  onCvcBlur = e => {
    this.setState({
      flippedPreview: false
    });
    this.onFieldFocus(e);
  }
}

BankCardForm = reduxForm({
  form: 'BankCardForm'
})(BankCardForm);

const selector = formValueSelector('BankCardForm')

function mapStateToProps(state) {
  let card = selector(state, 'number', 'name', 'cvc', 'expiryMonth', 'expiryYear')
  return {
    card
  };
}

export default connect(mapStateToProps)(BankCardForm);
