/* eslint-disable react/style-prop-object */
import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from './config/routes';
import Header from './header';
// import logo from './asset/';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
