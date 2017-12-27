import React, { Component } from 'react';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeSelectGroupModalState } from 'pages/common/selectors';
import { setGroupModalState } from 'pages/common/actions';
import GroupsModalHeader from 'components/Groups/GroupsModalHeader';
import ModalGroupsList from './ModalGroupsList';
import ModalAddGroup from './ModalAddGroup';

const MODAL_STATES = {
  groupsList: 'groupsList',
  editGroup: 'editGroup',
  addGroup: 'addGroup',
};

class GroupsModal extends Component {
  constructor(props) {
    super(props);

    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);

    this.state = {
      modalState: MODAL_STATES.groupsList,
    };
  }

  handlePlusClick() {
    this.setState({ modalState: MODAL_STATES.addGroup });
  }

  handleCloseClick() {
    this.setState({ modalState: MODAL_STATES.groupsList });
    this.props.setGroupModalState(false);
  }

  handleCreateClick() {
    this.setState({ modalState: MODAL_STATES.groupsList });
  }

  render() {
    const style = {
      content: {
        width: 500,
        minHeight: 600,
        overflow: 'hidden',
      },
    };

    return (
      <Modal
        isOpen={this.props.isOpen}
        // onAfterOpen={afterOpenFn}
        // onRequestClose={requestCloseFn}
        // closeTimeoutMS={n}
        style={style}
        contentLabel="Modal"
      >
        <GroupsModalHeader title="Groups" onCloseClick={this.handleCloseClick} />

        { this.state.modalState === MODAL_STATES.groupsList &&
          <ModalGroupsList onPlusClick={this.handlePlusClick} />
        }
        { this.state.modalState === MODAL_STATES.addGroup &&
          <ModalAddGroup onCreateClick={this.handleCreateClick} />
        }
      </Modal>
    );
  }
}

ModalGroupsList.propTypes = {
  isOpen: PropTypes.bool,
  setGroupModalState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectGroupModalState(),
});

const mapDispatchToProps = {
  setGroupModalState,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsModal);
