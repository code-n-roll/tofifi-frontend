import React, { Component } from 'react';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import CustomScroll from 'react-custom-scroll';


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

import './styles.css';

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
        width: '90%',
        maxWidth: 800,
        minHeight: 640,
        overflow: 'hidden',
      },
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
          <CustomScroll heightRelativeToParent="calc(100% - 60px)">
            <div className="settings-modal__body">
              <div className="settings-modal__section">
                <Subheader>Account settings</Subheader>
                <ProfileComponent userProfile={props.userProfile} />
              </div>
              <div className="settings-modal__divider"></div>
              <div className="settings-modal__section settings-modal__payments-section">
                <Subheader>Payments settings</Subheader>
                <PaymentsComponent
                  userProfile={props.userProfile}
                  onRemoveCardClick={this.handleRemoveCardClick}
                />
              </div>
            </div>
          </CustomScroll>
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
