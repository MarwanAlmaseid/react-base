import React from 'react';
import logo from './logo.svg';
import './App.scss';
import classes from './App.module.scss';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className={classes.AppHeader}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
