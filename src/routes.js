import React from 'react'

import {Switch, Route} from 'react-router-dom'
import Sketchful from './Components/Sketchful/Sketchful';
import App from './App';
import Main from './Main';


export default <Switch> 
    <Route exact path='/' component={Main} />
    <Route path='/sketchful'  component={Sketchful} />

</Switch>