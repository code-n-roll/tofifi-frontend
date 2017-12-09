import React, { Component } from 'react';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required } from 'components/forms/validations';

class PurchaseParticipant extends Component {
  render() {
    const { props } = this;

    return (
      <div className="create-purchase_participant">
        <div>
          <Avatar email={props.email} size={50} round style={{ marginRight: 10 }} />
          <span>{props.username}</span>
        </div>
        <Field
          name={`${props.id}.sum`}
          placeholder="Sum"
          component={InputControl}
          onValueChange={this.handleEmailValueChange}
          validate={[required]}
          style={{ width: 150 }}
        />
      </div>
    );
  }
}

PurchaseParticipant.propTypes = {
  email: PropTypes.string,
};

export default PurchaseParticipant;
