import React, { Component } from 'react';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
} from 'pages/common/actions';


class SettingsModal extends Component {
  constructor(props) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen === false && nextProps.isOpen === true) {
      this.props.getCurrentUserProfileRequest();
    }
  }

  handleCloseClick() {
    this.props.setSettingsModalState(false);
  }

  render() {
    const style = {
      content: {
        width: 500,
        minHeight: 600,
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
          <div style={{ overflow: 'auto', height: 'calc(100% - 50px)' }}>
            <ProfileComponent userProfile={props.userProfile} />
            <PaymentsComponent userProfile={props.userProfile} />
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
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectSettingsModalState(),
  userProfile: makeSelectCurrentUserProfile(),
});

const mapDispatchToProps = {
  setSettingsModalState,
  getCurrentUserProfileRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
