import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAvatar from 'react-avatar';

const avatarStyle = {
  display: 'block',
  marginBottom: '5px',
  opacity: 0.7,
};

class Avatar extends Component {
  state = {
    useBackupAvatar: !this.props.avatarUrl,
  }

  handleImageLoadingError = () => {
    this.setState({
      useBackupAvatar: true,
    });
  }

  render() {
    const { avatarUrl, username, size } = this.props;
    return (
      this.state.useBackupAvatar ?
        <ReactAvatar name={username} size={size || 50} round style={avatarStyle} /> :
        <img onError={this.handleImageLoadingError} width={size || 50} height={size || 50} src={avatarUrl} alt={username} />
    );
  }
}

Avatar.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
