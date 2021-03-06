import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import List from './components/List/List';
import AddContact from './components/AddContact/AddContact';
import AddContactList from './components/AddContact/AddContactList';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AddContactList}/>
          <Route exact path="/list" component={List}/>
          <Route exact path="/add" component={AddContact}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;