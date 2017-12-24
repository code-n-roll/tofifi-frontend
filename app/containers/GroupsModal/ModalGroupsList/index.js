import React, { Component } from 'react';
import ListFilter from 'components/ListFilter';
import PropTypes from 'prop-types';
import PlusButton from 'components/PlusButton';
import GroupsList from 'components/Groups/GroupsList';
import { createStructuredSelector } from 'reselect';
import { makeSelectGroups } from 'pages/common/selectors';
import { getGroupUsersRequest } from 'pages/common/actions';
import { connect } from 'react-redux';

class ModalGroupsList extends Component {
  render() {
    return (
      <div className="fill-parent purchases-list">
        <ListFilter
          renderList={GroupsList}
          items={this.props.groups}
          filterProp="name"
          itemsPropName="groups"
          inputPlaceholder="Enter group name"
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
};

const mapStateToProps = createStructuredSelector({
  groups: makeSelectGroups(),
});

const mapDispatchToProps = {
  getGroupUsersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGroupsList);
