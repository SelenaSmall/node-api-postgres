import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Comments from './components/Comments';

export default () => (
  <Switch>
    <Route exact path="/" component={Comments} />
  </Switch>
);
