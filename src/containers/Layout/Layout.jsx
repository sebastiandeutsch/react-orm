import React from 'react';
import { Router, Route, Link } from 'react-router';

import Sidebar from 'containers/Sidebar';
import Content from 'containers/Content';

import * as Actions from 'actions/Actions';

import Styles from './Layout.sass';

/**
 * Layout
 */
export default class Layout extends React.Component {
  render() {
    return (
      <div className={Styles.Layout}>
        <Sidebar />
        <Content>
          {this.props.children}
        </Content>
      </div>
    )
  }
}
