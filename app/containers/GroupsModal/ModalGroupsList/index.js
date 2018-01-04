import React, { Component } from 'react';
import ListFilter from 'components/ListFilter';
import PropTypes from 'prop-types';
import PlusButton from 'components/PlusButton';
import GroupsList from 'components/Groups/GroupsList';
import { createStructuredSelector } from 'reselect';
import { makeSelectGroups } from 'pages/common/selectors';
import { connect } from 'react-redux';

class ModalGroupsList extends Component {
  render() {
    return (
      <div className="fill-parent pos-rel">
        <ListFilter
          renderList={GroupsList}
          items={this.props.groups}
          filterProp="name"
          itemsPropName="groups"
          inputPlaceholder="Enter group name"
          listContainerClassName="groups-modal-list"
          heightRelativeToParent="calc(100% - 100px)"
          listProps={{
            withMenu: true,
            onEditClick: this.props.onEditClick,
            onDeleteClick: this.props.onDeleteClick,
            onLeaveClick: this.props.onLeaveClick,
            avatarsNumber: 7,
          }}
        />
        <div className="go-to-create-purchase-btn">
          <PlusButton onClick={this.props.onPlusClick} />
        </div>
      </div>
    );
  }
}

ModalGroupsList.propTypes = {
  groups: PropTypes.array,
  onPlusClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onLeaveClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  groups: makeSelectGroups(),
});

export default connect(mapStateToProps)(ModalGroupsList);
