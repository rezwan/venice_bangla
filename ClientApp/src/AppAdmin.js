import React, { Component } from 'react';
import { Router, Route} from 'react-router';
import { LayoutMaster } from './Admin/components/LayoutMaster';
import { Home } from './Admin/components/Home';
import { FetchData } from './Admin/components/FetchData';
import { Counter } from './Admin/components/Counter';
import { Client } from './Client/components/Client';

export default class AppAdmin extends Component {
  displayName = AppAdmin.name

  render() {
    return (
        <LayoutMaster>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/client' component={Client} />
      </LayoutMaster>
    );
  }
}
