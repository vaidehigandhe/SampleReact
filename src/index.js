import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './AppComponent';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import Login from './components/LoginComponent';
import RiskViewer from './components/RiskViewerComponent';

// Render the main component into the dom
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Header}>
        <IndexRoute component={Header}></IndexRoute>
        <Route path="login" component={Login} />
        <Route path="header" component={Header} />
        <Route path="home" component={Home} />
        <Route path="riskViewer" component={RiskViewer} />
    </Route>
</Router>, document.getElementById('app'));
