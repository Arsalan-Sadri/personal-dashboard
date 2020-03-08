import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exat path='/' component={SignupPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
