import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {HomePlanet} from './component/HomePlanet';
import WorldMap from './component/WorldMap';
import MapView from './component/MapDisplay';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store'
import { Provider } from 'react-redux'
import Login from './component/Login';
import { setAuthenticationToken } from './utils'
import Canvas from './component/Canvas';
var {registerObserver} = require('react-perf-devtool')

const token = localStorage.getItem("jsonwebtoken")
if(token) {
  setAuthenticationToken(token)
}


ReactDOM.render(

<BrowserRouter>
<Provider store = {store}>
<App>
    <Switch>
      <Route exact path = "/" component = {Login}  />
      <Route exact path = "/map" component = {HomePlanet} />
      <Route path = "/join-map" component = {WorldMap} />
      <Route path = "/worldmap" component = {MapView} />
      <Route path = "/drawn-canvas" component = {Canvas} />
    </Switch>
</App>
</Provider>
</BrowserRouter>

, document.getElementById('root')
);
registerServiceWorker();
registerObserver();
