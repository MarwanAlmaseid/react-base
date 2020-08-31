import React from 'react';
import logo from './logo.svg';
import './App.scss';
import classes from './App.module.scss';
import Button from '@material-ui/core/Button';
import store from 'store2';

const setValue = ()=> {
  store('lang', 'ar');                 
}


function App() {
  return (
    <div className="App">
      <header className={classes.AppHeader}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="contained" color="primary" onClick={setValue}>
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
