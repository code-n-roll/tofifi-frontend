import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { verifyAccessRequest, setIsValidToken } from './actions';

import { verifyAccessToRestorePasswordApi } from 'utils/api/requests';

import UnloggedLayout from 'components/layouts/UnloggedLayout';
import NotFound from '../NotFoundPage'
import RestorePasswordForm from 'components/forms/RestorePasswordForm';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';


class RestorePasswordPage extends Component {
  constructor(props) {
    super(props);

    this.handleRestorePasswordLinkClick = this.handleRestorePasswordLinkClick.bind(this);
    this.state = {
      isValidToken: false
    }
  }

  componentWillMount() {
    debugger;
    this.props.verifyAccessRequest(this.props.location.query);
    // this.handleRestorePasswordLinkClick(this.props.location.query);
    debugger;
  }

  handleRestorePasswordLinkClick(query) {
    // debugger;
    // this.props.verifyAccessRequest(query);
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
  verifyAccessRequest: PropTypes.func,
  isValidToken: PropTypes.bool,
};

const mapDispatchToProps = {
  verifyAccessRequest
};



export default connect(mapDispatchToProps)(RestorePasswordPage);
