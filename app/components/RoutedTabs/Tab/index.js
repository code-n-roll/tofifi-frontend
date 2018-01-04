import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Tab extends Component {
  render() {
    let { name, link } = this.props;

    return (
      <Link to={link}
        activeClassName="is-active"
      >
        {name}
      </Link>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string
};

export default Tab;
