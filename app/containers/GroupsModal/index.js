import React, { Component } from 'react';
import Modal from 'react-modal';
import GroupsModalHeader from 'components/Groups/GroupsModalHeader';
import GroupsList from './GroupsList';

const MODAL_STATES = {
  groupsList: 'groupsList',
  editGroup: 'editGroup',
};

class GroupsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: MODAL_STATES.groupsList,
    };
  }

  render() {
    const style = {
      content: {
        width: 500,
      },
    };

    return (
      <Modal
        isOpen={false}
        // onAfterOpen={afterOpenFn}
        // onRequestClose={requestCloseFn}
        // closeTimeoutMS={n}
        style={style}
        contentLabel="Modal"
      >
        <GroupsModalHeader title="Groups" />
        <GroupsList />
      </Modal>
    );
  }
}

export default GroupsModal;
