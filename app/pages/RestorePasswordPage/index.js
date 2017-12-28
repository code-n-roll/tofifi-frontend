import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UnloggedLayout from 'components/layouts/UnloggedLayout';
import NotFound from '../NotFoundPage'
import RestorePasswordForm from 'components/forms/RestorePasswordForm';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import { verifyAccessToRestorePasswordApi } from 'utils/api/requests';
import { call } from 'redux-saga/effects';
import { connect } from 'react-redux';
import { verifyAccessToRestorePasswordRequest } from './actions'


class RestorePasswordPage extends Component {
  constructor(props) {
    super(props);

    this.handleRestorePasswordLinkClick = this.handleRestorePasswordLinkClick.bind(this);
    this.state = {
      isValidToken: false
    }
  }

  componentWillMount() {
    this.handleRestorePasswordLinkClick(this.props.location.query);
  }

  handleRestorePasswordLinkClick(query) {
    this.props.verifyAccessToRestorePasswordRequest(query);
  }

  render() {
    return (
      this.state.isValidToken ?
      <UnloggedLayout>
        <OnScreenHeightSection>
          <div className="mdl-typography--text-center" style={{ position: 'relative', zIndex: 2 }}>
            <div className="sign-in-sign-up-form-container">
                <h5>Enter your new password</h5>
                <RestorePasswordForm/>
            </div>
          </div>
        </OnScreenHeightSection>
      </UnloggedLayout>
      :
      <NotFound/>
    );
  }
}

RestorePasswordPage.propTypes = {
  router: PropTypes.any,
  verifyAccessToRestorePasswordRequest: PropTypes.func,
};

const mapDispatchToProps = {
  verifyAccessToRestorePasswordRequest,
};

export default connect(() => {}, mapDispatchToProps)(RestorePasswordPage);
