import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import Index from './components/index';
import People from './components/people';
import Location from './components/location';
import Species from './components/species';
import Vehicle from './components/vehicle';
import DetailFilm from './components/detailFilm';
import DetailLocation from './components/detailLocation';
import DetailPeople from './components/detailPeople';
import DetailSpecies from './components/detailSpecies';
import DetailVehicle from './components/detailVehicle';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route path="/vehicle/:id" component={DetailVehicle}/>
                        <Route path="/species/:id" component={DetailSpecies}/>
                        <Route path="/people/:id" component={DetailPeople}/>
                        <Route path="/location/:id" component={DetailLocation}/>
                        <Route path="/films/:id" component={DetailFilm}/>
                        <Route path="/vehicle" component={Vehicle}/>
                        <Route path="/species" component={Species}/>
                        <Route path="/location" component={Location}/>
                        <Route path="/people" component={People}/>
                        <Route path="/" component={Index}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
