import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import ReactBankCard from 'react-bank-card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
        style={{marginTop: 40}}
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
          <div style={{width: 390, padding: '0 60px 0 40px'}}>
            <div>
              <Field
                name="name"
                type="text"
                floatingLabel="Holder name"
                onFocus={this.onFieldFocus}
                normalize={normalizers.name}
                validate={[required]}
                component={InputControl}
              />
            </div>
            <div>
              <Field
                name="number"
                floatingLabel="Card number"
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
                  floatingLabel="MM"
                  className="bank-card-form__small-input"
                  style={{width: 40}}
                  onFocus={this.onFieldFocus}
                  normalize={normalizers.month}
                  validate={[required]}
                  component={InputControl}
                />
                <div className="bank-card-form__expiry-divider">/</div>
                <Field
                  name="expiryYear"
                  type="number"
                  floatingLabel="YY"
                  className="bank-card-form__small-input"
                  style={{width: 40}}
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
                floatingLabel="CVC"
                className="bank-card-form__small-input"
                style={{width: 40}}
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
            <RaisedButton
              label="Cancel"
              secondary={true}
              style={{marginRight: 20}}
              onClick={onCancel}
            />
            <RaisedButton
              type="submit"
              label="Save"
              primary={true}
              style={{marginRight: 45}}
              disabled = {pristine || submitting || invalid }
            />
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
