import React from 'react';
import { Router, Route, Link } from 'react-router';

import Styles from './Content.sass';

/**
 * Displays the content
 */
export default class Content extends React.Component {
  render() {
    return (
      <div className={Styles.Content}>
        {this.props.children}
      </div>
    )
  }
}
