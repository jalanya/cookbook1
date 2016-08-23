import * as types from './actionTypes';
import recipeApi from '../api/mockRecipeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadRecipesSuccess(recipes) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes};
}

export function loadRecipes() {
  return async (dispatch, getState) => {
    dispatch(beginAjaxCall());
    const recipes = await recipeApi.getAllRecipes();
    if (!recipes) return;
    dispatch(loadRecipesSuccess(recipes));
  };
}

export function createRecipeSuccess(recipe) {
  return {type: types.CREATE_RECIPE_SUCCESS, recipe};
}

export function updateRecipeSuccess(recipe) {
  return {type: types.UPDATE_RECIPE_SUCCESS, recipe};
}

export function saveRecipe(recipe) {
  return async (dispatch, getState) => {
    dispatch(beginAjaxCall());
    const saveRecipe = await recipeApi.saveRecipe(recipe);
    recipe.id ? dispatch(updateRecipeSuccess(saveRecipe)) :
      dispatch(createRecipeSuccess(saveRecipe));
  };
}
