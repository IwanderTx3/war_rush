import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {HomePlanet} from './component/HomePlanet';
import WorldMap from './testcase/WorldMap';
import MapView from './component/MapDisplay';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//import reducer from './store/reducer';
import store from './store/store'
import { Provider } from 'react-redux'

var {registerObserver} = require('react-perf-devtool')


ReactDOM.render(

<BrowserRouter>
<Provider store = {store}>
<App>
    <Switch>
      <Route exact path = "/" component = {App}  />
      <Route exact path = "/map" component = {HomePlanet} />
      <Route path = "/join-map" component = {WorldMap} />
      <Route path = "/worldmap" component = {MapView} />
    </Switch>
</App>
</Provider>
</BrowserRouter>

, document.getElementById('root')
);
registerServiceWorker();
registerObserver();
