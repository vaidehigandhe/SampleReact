import React from 'react';
import Grid from 'react-uikit-grid';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class HeaderComponent extends React.Component {
 
  render() {
  return (
     <Grid>
      <nav className="uk-navbar-container uk-margin" >
    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li className="uk-active">  <Link to="/home">Home</Link></li>
            <li>
              <Link to="/riskViewer">Risk Viewer</Link></li>
           
        </ul>
{this.props.children}
    </div>
</nav>

</Grid>
  )}
}

export default HeaderComponent;
