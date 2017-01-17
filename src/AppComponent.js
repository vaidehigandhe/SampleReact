/*require('normalize.css/normalize.css');*/
/*require('styles/App.css');*/

import React from 'react';
import Login from './components/LoginComponent';


class AppComponent extends React.Component {
 
  render() {
     
    return (
      <Login />
     
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
