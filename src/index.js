import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadRecipes} from './actions/recipeActions';

const store = configureStore();
store.dispatch(loadRecipes());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
