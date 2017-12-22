import React, { Component } from 'react';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
  }

  handleTabClick = tabIndex => {
    this.setState({
      activeTabIndex: tabIndex
    });
  }

  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: () => this.handleTabClick(index),
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div className="mdl-tabs">
        <div className="mdl-tabs__tab-bar">
          {this.renderChildrenWithTabsApiAsProps()}
        </div>
        <div className="mdl-tabs__panel">
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
};
