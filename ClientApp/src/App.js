import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Client/components/Layout';
import { Client } from './Client/components/Client';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
        <Route exact path='/' component={Client} />
        <Route exact path='/client' component={Client} />
      </Layout>
    );
  }
}
