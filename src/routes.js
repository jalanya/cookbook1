import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import RecipesPage from './components/recipe/RecipesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="recipes/:category" component={RecipesPage} />
    <Route path="recipes/:category" component={RecipesPage} />
    <Route path="recipes/:category" component={RecipesPage} />
    <Route path="recipes/:category" component={RecipesPage} />
    <Route path="recipes/:category" component={RecipesPage} />
  </Route>
);
