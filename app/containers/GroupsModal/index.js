import React, { Component } from 'react';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeSelectGroupModalState } from 'pages/common/selectors';
import { setGroupModalState } from 'pages/common/actions';
import DefaultModalHeader from 'components/Modals/DefaultModalHeader';
import ModalGroupsList from './ModalGroupsList';
import ModalAddEditGroup from './ModalAddEditGroup';

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
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);

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

  handleSubmitClick() {
    this.setState({ modalState: MODAL_STATES.groupsList });
  }

  handleEditClick(group) {
    this.setState({
      modalState: MODAL_STATES.editGroup,
      groupForEditing: group,
    });
  }

  handleBackClick() {
    this.setState({ modalState: MODAL_STATES.groupsList });
  }

  render() {
    const style = {
      content: {
        width: 410,
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
        <DefaultModalHeader title="Groups" onCloseClick={this.handleCloseClick} />

        { this.state.modalState === MODAL_STATES.groupsList &&
          <ModalGroupsList onPlusClick={this.handlePlusClick} onEditClick={this.handleEditClick} />
        }
        { this.state.modalState === MODAL_STATES.addGroup &&
          <ModalAddEditGroup
            onSubmitClick={this.handleSubmitClick}
            onBackClick={this.handleBackClick}
          />
        }
        { this.state.modalState === MODAL_STATES.editGroup &&
          <ModalAddEditGroup
            group={this.state.groupForEditing}
            isEditMode
            onSubmitClick={this.handleSubmitClick}
            onBackClick={this.handleBackClick}
          />
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
