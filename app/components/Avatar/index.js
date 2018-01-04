import React from 'react';
import PropTypes from 'prop-types';
import ReactAvatar from 'react-avatar';

const avatarStyle = {
  display: 'block',
  marginBottom: '5px',
};

const Avatar = (props) => (
  props.avatarUrl ?
    <img width={50} height={50} src={props.avatarUrl} alt={props.username} /> :
    <ReactAvatar name={props.username} size={50} round style={avatarStyle} />
);

Avatar.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default Avatar;
