import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { verifyAccessRequest } from './actions';
import { makeSelectTokenStatus } from 'pages/RestorePasswordPage/selectors';

import UnloggedLayout from 'components/layouts/UnloggedLayout';
import RestorePasswordForm from 'components/forms/RestorePasswordForm';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';

class RestorePasswordPage extends Component {
  constructor(props) {
    super(props);

    this.renderRestorePasswordForm = this.renderRestorePasswordForm.bind(this);
    this.renderExpiredLinkMessage = this.renderExpiredLinkMessage.bind(this);

    this.state = {
      isValidToken: false,
    };
  }

  componentWillMount() {
    this.props.verifyAccessRequest(this.props.location.query);
  }

  renderRestorePasswordForm() {
    return (
      <div>
        <h5>Enter your new password</h5>
        <RestorePasswordForm />
      </div>
    );
  }

  renderExpiredLinkMessage() {
    return (
      <div>
        <h5>Your link is wrong or expired.</h5>
        <button
          className="mdl-button mdl-js-button mdl-button--raised big-btn bg-blue text-white"
          onClick={() => this.props.router.push('forgot_password')}
        >
          Get new link
        </button>
      </div>
    );
  }

  render() {
    let childComponent = null;
    if (this.props.isValidToken === true) {
      childComponent = this.renderRestorePasswordForm();
    } else if (this.props.isValidToken === false) {
      childComponent = this.renderExpiredLinkMessage();
    }

    return (
      <UnloggedLayout>
        <OnScreenHeightSection>
          <div className="mdl-typography--text-center" style={{ position: 'relative', zIndex: 2 }}>
            <div className="sign-in-sign-up-form-container">
              {childComponent}
            </div>
          </div>
        </OnScreenHeightSection>
      </UnloggedLayout>
    );
  }
}

RestorePasswordPage.propTypes = {
  verifyAccessRequest: PropTypes.func,
  isValidToken: PropTypes.object,
};

const mapDispatchToProps = {
  verifyAccessRequest,
};

const mapStateToProps = createStructuredSelector({
  isValidToken: makeSelectTokenStatus(),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestorePasswordPage);
