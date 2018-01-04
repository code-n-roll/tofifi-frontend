import React, { Component } from 'react';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required } from 'components/forms/validations';
import { onlyDecimal } from 'components/forms/normalizers';

const avatarStyle = {
  display: 'block',
  marginBottom: '5px',
};

class PurchaseParticipant extends Component {
  render() {
    const { props } = this;

    return (
      <div className="create-purchase_participant">
        <div style={{
          textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'
        }}>
          {props.avatarUrl ?
            <img width={50} height={50} src={props.avatarUrl} /> :
            <Avatar name={props.username} size={50} round style={avatarStyle} />
          }
          <div style={{maxWidth: 150, overflowX: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
            {props.username}
          </div>
        </div>
        <Field
          name={`users.${props.id}.sum`}
          placeholder="Sum"
          hintText="User will enter the amount himself"
          hintStyle={{ fontSize: 10, lineHeight: '15px' }}
          component={InputControl}
          style={{ width: 150 }}
          inputStyle={{ textAlign: 'center' }}
          placeholderStyle={{ textAlign: 'center' }}
          onValueChange={(e) => props.onSumChange(e.target.value)}
          normalize={onlyDecimal}
        />
      </div>
    );
  }
}

PurchaseParticipant.propTypes = {
  email: PropTypes.string,
  onSumChange: PropTypes.func,
};

export default PurchaseParticipant;
