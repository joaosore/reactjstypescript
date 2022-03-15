import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from '../pages/auth/Login';
import { Logout } from '../pages/auth/Logout';
import { Dashboard } from '../pages/Dashboard';

import RequireAuth from '../middlewares/Auth';

import { UserList } from '../pages/Users/List';
import { UserCreate } from '../pages/Users/Create';
import { UserEdit } from '../pages/Users/Edit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={RequireAuth(Dashboard)} />

    <Route path="/login" component={Login} />
    <Route path="/logout" component={RequireAuth(Logout)} />

    <Route path="/users" exact component={RequireAuth(UserList)} />
    <Route path="/users/add" exact component={RequireAuth(UserCreate)} />
    <Route path="/users/:id" component={RequireAuth(UserEdit)} />
  </Switch>
);
export default Routes;
