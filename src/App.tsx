import React from 'react';
import './App.scss';
import classes from './App.module.scss';
import Button from '@material-ui/core/Button';
import getDir, { toggleDir } from './services/language.service';


const setValue = () => {
  let dir = "ltr";

  if(getDir() === 'ltr')
    dir = "rtl"

  toggleDir(dir);
}


function App() {
  return (
    <div>
      <header className={classes.AppHeader}>

        <Button variant="contained" color="primary" onClick={setValue}>
          Hello World
        </Button>

        <div className={classes.direction}>
          Dir 
        </div>
      </header>
    </div>
  );
}

export default App;
