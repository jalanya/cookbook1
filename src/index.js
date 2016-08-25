import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadRecipes} from './actions/recipeActions';
import {loadCategories} from './actions/categoryActions';
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import materialize from 'materialize-css';

const store = configureStore();
store.dispatch(loadRecipes());
store.dispatch(loadCategories());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
