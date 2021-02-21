import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import { Home } from './Home/Home'
import {TakePicture} from './TakePicture/TakePicture'

const ScanIDApp = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/take" render={() => <TakePicture/>}/>

    </Switch>
  )

}

export default ScanIDApp;
