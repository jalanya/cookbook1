import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import RecipesPage from './components/recipe/RecipesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecipesPage} />
    <Route path="recipes" component={RecipesPage} />
    <Route path="recipes/pastas" component={RecipesPage} />
    <Route path="recipes/salads" component={RecipesPage} />
    <Route path="recipes/meat" component={RecipesPage} />
    <Route path="recipes/sesserts" component={RecipesPage} />
  </Route>
);
