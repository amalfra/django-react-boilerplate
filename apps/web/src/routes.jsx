import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import HomepageContainer from './containers/Home';
import DetailsContainer from './containers/Details';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomepageContainer} />
    <Route exact path="/details" component={DetailsContainer} />
  </BrowserRouter>
);

export default Routes;
