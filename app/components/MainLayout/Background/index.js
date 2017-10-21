import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <div style={styles.imageContainer}>
        <div style={styles.imageOpacity} />
      </div>
    );
  }
}

export default Header;
