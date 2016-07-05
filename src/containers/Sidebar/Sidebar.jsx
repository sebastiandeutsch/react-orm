import React from 'react';
import { Router, Route, Link } from 'react-router';
import Config from 'config/Config';

import Styles from './Sidebar.sass';

/**
 * Application connected React Component
 */
export default class Sidebar extends React.Component {
  render() {
    return (
      <aside className={Styles.Sidebar}>
        <h1>
          <Link to="/">Hello React + Redux</Link>
        </h1>
        <ul>
          <li>
            <Link to="/help/1">Help?</Link>
          </li>
          <li>
            <span>API: </span>
            <span>{Config.apiUrl}</span>
          </li>
        </ul>
      </aside>
    )
  }
}
