import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { PersonalDetails } from './components/application/PersonalDetails';
import { ContactDetails } from './components/application/ContactDetails';
import { Availability } from './components/application/Availability';
import { Skills } from './components/application/Skills'
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <AuthorizeRoute path='/personaldetails' component={PersonalDetails} />
            <AuthorizeRoute path='/contactdetails' component={ContactDetails} />
            <AuthorizeRoute path='/availability' component={Availability} />
            <AuthorizeRoute path='/skills' component={Skills} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
