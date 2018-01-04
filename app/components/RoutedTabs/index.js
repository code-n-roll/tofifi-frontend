import React, { Component } from 'react';
import { Route } from 'react-router';

export default class RoutedTabs extends Component {
  renderActiveTabContent() {
    return React.Children.map(this.props.children, (child, index) => {
      return <Route path={child.props.link} component={child.props.children}/>
    });
  }

  render() {
    return (
      <div className="mdl-tabs">
        <div className="mdl-tabs__tab-bar">
          {this.props.children}
        </div>
        <div className="mdl-tabs__panel">
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
};
