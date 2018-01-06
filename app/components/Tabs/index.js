import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
    };
  }

  handleTabClick = (tabIndex) => {
    this.setState({
      activeTabIndex: tabIndex,
    });
  }

  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children,
      (child, index) => React.cloneElement(child, {
        onClick: () => this.handleTabClick(index),
        isActive: index === this.state.activeTabIndex,
      }));
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (!children[activeTabIndex]) return null;

    return children[activeTabIndex].props.children;
  }

  render() {
    const heightStyle = this.props.fullHeight ? {
      height: '100%',
    } : {};

    return (
      <div className="mdl-tabs" style={heightStyle}>
        <div className="mdl-tabs__tab-bar">
          {this.renderChildrenWithTabsApiAsProps()}
        </div>
        <div className="mdl-tabs__panel" style={{ height: 'calc(100% - 48px)' }}>
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  fullHeight: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Tabs;
