import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContact from './containers/ListConstacts';
import NewContacts from './components/NewContacts';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ListContact} exact />
        <Route path="/create" component={NewContacts} />
      </div>
    );
  }
}

export default App;
