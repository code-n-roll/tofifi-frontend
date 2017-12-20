import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { makeSelectUsers } from 'pages/common/selectors';
import { setPendingPurchase, setPendingPurchaseParticipants } from 'pages/DashboardPage/actions';
import { makeSelectPendingPurchaseParticipants } from 'pages/DashboardPage/selectors';
import PurchaseForm from 'components/forms/PurchaseForm';
import classNames from 'classnames';


class CreatePurchaseStep2 extends Component {
  constructor(props) {
    super(props);

    this.getUsersFromIds = this.getUsersFromIds.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);

    this.state = {
      activeTab: 1,
    };
  }

  getUsersFromIds() {
    const participantsIds = new Set(this.props.pendingParticipants);
    return _.filter(this.props.users, (user) => participantsIds.has(user.id));
  }

  handleTabClick(tabIndex) {
    this.setState({ activeTab: tabIndex });
  }

  handleCancelClick() {
    this.props.setPendingPurchase(null);
    this.props.setPendingPurchaseParticipants(null);
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="fill-parent">
        <div className="create-purchase-tabs mdl-tabs mdl-js-tabs  mdl-js-ripple-effect">
          <div className="mdl-tabs__tab-bar">
            <a
              href="#starks-panel"
              className={classNames('mdl-tabs__tab', { 'is-active': this.state.activeTab === 1 })}
              onClick={() => this.handleTabClick(1)}
            >
              Custom price
            </a>
            <a
              href="#targaryens-panel"
              className={classNames('mdl-tabs__tab', { 'is-active': this.state.activeTab === 2 })}
              onClick={() => this.handleTabClick(2)}
            >
              Market
            </a>
          </div>
        </div>
        {this.state.activeTab === 1 && (
          <PurchaseForm
            participants={this.getUsersFromIds()}
            onCancelClick={this.handleCancelClick}
          />
        )}
      </div>
    );
  }
}

CreatePurchaseStep2.propTypes = {
  users: PropTypes.array,
  setPendingPurchase: PropTypes.func,
  pendingParticipants: PropTypes.array,
  setPendingPurchaseParticipants: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  pendingParticipants: makeSelectPendingPurchaseParticipants(),
});

const mapDispatchToProps = {
  setPendingPurchase,
  setPendingPurchaseParticipants,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePurchaseStep2);
