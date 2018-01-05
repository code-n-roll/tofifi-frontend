import React, { Component } from 'react';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import CustomScroll from 'react-custom-scroll';
import AlertContainer from 'react-alert';

import ProfileComponent from 'components/Settings/Profile';
import PaymentsComponent from 'components/Settings/Payments';
import DefaultModalHeader from 'components/Modals/DefaultModalHeader';
import {
  makeSelectSettingsModalState,
  makeSelectCurrentUserProfile,
  makeSelectUserUpdateSuccessMsg,
  makeSelectAddingCardErrorMsg,
} from 'pages/common/selectors';

import {
  setSettingsModalState,
  getCurrentUserProfileRequest,
  removeBankCardRequest,
  setUserUpdatingSuccessMsg,
  setCardAddingErrorMsg,
} from 'pages/common/actions';

import './styles.css';


const alertOptions = {
  offset: 14,
  position: 'bottom right',
  theme: 'dark',
  time: 5000,
  transition: 'scale',
};

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

    if (nextProps.userUpdateSuccessMsg) {
      this.msg.success(nextProps.userUpdateSuccessMsg, {
        time: 2000,
      });
      this.props.setUserUpdatingSuccessMsg(null);
    }

    if (nextProps.addingCardErrorMsg) {
      this.msg.error(nextProps.addingCardErrorMsg, {
        time: 2000,
      });
      this.props.setCardAddingErrorMsg(null);
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
        width: '90%',
        maxWidth: 800,
        minHeight: 640,
        overflow: 'hidden',
      },
    };

    const subheaderStyle = {
      fontSize:16,
      marginTop: 10
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
          <CustomScroll heightRelativeToParent="calc(100% - 50px)">
            <div className="settings-modal__body">
              <div className="settings-modal__profile_section">
                <Subheader style={subheaderStyle}>Account settings</Subheader>
                <ProfileComponent userProfile={props.userProfile} />
              </div>
              <div className="settings-modal__divider"></div>
              <div className="settings-modal__section settings-modal__payments-section">
                <Subheader style={subheaderStyle}>Payments settings</Subheader>
                <PaymentsComponent
                  userProfile={props.userProfile}
                  onRemoveCardClick={this.handleRemoveCardClick}
                />
              </div>
            </div>
          </CustomScroll>
        )}
        <AlertContainer ref={(a) => { this.msg = a; }} {...alertOptions} />
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
  setUserUpdatingSuccessMsg: PropTypes.func,
  addingCardErrorMsg: PropTypes.string,
  setCardAddingErrorMsg: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectSettingsModalState(),
  userProfile: makeSelectCurrentUserProfile(),
  userUpdateSuccessMsg: makeSelectUserUpdateSuccessMsg(),
  addingCardErrorMsg: makeSelectAddingCardErrorMsg(),
});

const mapDispatchToProps = {
  setSettingsModalState,
  getCurrentUserProfileRequest,
  removeBankCardRequest,
  setUserUpdatingSuccessMsg,
  setCardAddingErrorMsg,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
