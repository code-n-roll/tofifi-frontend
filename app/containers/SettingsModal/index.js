import React, { Component } from 'react';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import { grey300 } from 'material-ui/styles/colors';
import ProfileComponent from 'components/Settings/Profile';
import PaymentsComponent from 'components/Settings/Payments';
import DefaultModalHeader from 'components/Modals/DefaultModalHeader';

import {
  makeSelectSettingsModalState,
  makeSelectCurrentUserProfile,
} from 'pages/common/selectors';

import {
  setSettingsModalState,
  getCurrentUserProfileRequest,
  removeBankCardRequest,
} from 'pages/common/actions';


class SettingsModal extends Component {
  constructor(props) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleRemoveCardClick = this.handleRemoveCardClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen === false && nextProps.isOpen === true) {
      this.props.getCurrentUserProfileRequest();
    }
  }

  handleCloseClick() {
    this.props.setSettingsModalState(false);
  }

  handleRemoveCardClick() {
    this.props.removeBankCardRequest();
  }

  render() {
    const style = {
      content: {
        width: 800,
        minHeight: 640,
        overflow: 'hidden',
      },
    };

    const deviderStyle = {
      position: 'absolute',
      left: '347px',
      width: 1,
      height: '100%',
      backgroundColor: grey300,
    };

    const { props } = this;

    return (
      <Modal
        isOpen={props.isOpen}
        // onAfterOpen={afterOpenFn}
        // onRequestClose={requestCloseFn}
        // closeTimeoutMS={n}
        style={style}
        contentLabel="Modal"
      >
        <DefaultModalHeader title="Settings" onCloseClick={this.handleCloseClick} />
        {props.userProfile && (
          <div style={{ overflow: 'auto', height: 'calc(100% - 50px)' }}>
            <div style={{ width: '335px', float: 'left' }}>
              <Subheader>Account settings</Subheader>
              <div style={{ marginLeft: '20px' }}>
                <ProfileComponent userProfile={props.userProfile} />
              </div>
            </div>
            <div style={deviderStyle} />
            <div style={{ marginLeft: '350px' }}>
              <Subheader>Payments settings</Subheader>
              <PaymentsComponent
                userProfile={props.userProfile}
                onRemoveCardClick={this.handleRemoveCardClick}
              />
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

SettingsModal.propTypes = {
  isOpen: PropTypes.bool,
  setSettingsModalState: PropTypes.func,
  getCurrentUserProfileRequest: PropTypes.func,
  userProfile: PropTypes.object,
  removeBankCardRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectSettingsModalState(),
  userProfile: makeSelectCurrentUserProfile(),
});

const mapDispatchToProps = {
  setSettingsModalState,
  getCurrentUserProfileRequest,
  removeBankCardRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
