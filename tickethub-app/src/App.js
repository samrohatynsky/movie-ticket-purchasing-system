import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from './routes/index';
import './App.css';

function App() {
  return (
      <Switch>
        {Routes()}
      </Switch>
  );
}

export default App;
