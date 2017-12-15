import React, { Component } from 'react';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required } from 'components/forms/validations';

const avatarStyle = {
  display: 'block',
  marginBottom: '5px',
};

class PurchaseParticipant extends Component {
  render() {
    const { props } = this;

    return (
      <div className="create-purchase_participant">
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Avatar email={props.email} size={50} round style={avatarStyle} />
          <div>{props.username}</div>
        </div>
        <Field
          name={`users.${props.id}.sum`}
          placeholder="Sum"
          component={InputControl}
          validate={[required]}
          style={{ width: 150 }}
          inputStyle={{ textAlign: 'center' }}
          placeholderStyle={{ textAlign: 'center' }}
        />
      </div>
    );
  }
}

PurchaseParticipant.propTypes = {
  email: PropTypes.string,
};

export default PurchaseParticipant;
