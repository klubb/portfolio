import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Sketchful from './Components/Sketchful/Sketchful'
import Klonewars from './Components/Klonewars/Klonewars'
import About from './Components/About/About'
export default <Switch> 
    <Route exact path='/' component={Home} />
    <Route path='/sketchful' component={Sketchful} />
    <Route path='/kodewars' component={Klonewars} />
    <Route path='/about' component={About} />


</Switch>