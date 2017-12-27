import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List, makeSelectable } from 'material-ui/List';

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });

      this.props.onChange(event, index);
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

const SelectableList = wrapState(makeSelectable(List));

SelectableList.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SelectableList;
