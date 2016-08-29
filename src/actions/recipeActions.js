import * as types from './actionTypes';
import recipeApi from '../api/mockRecipeApi';
import ApiClient from '../api/ApiClient';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadRecipesSuccess(recipes) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes};
}

export function createRecipeSuccess(recipe) {
  return {type: types.CREATE_RECIPE_SUCCESS, recipe};
}

export function updateRecipeSuccess(recipe) {
  return {type: types.UPDATE_RECIPE_SUCCESS, recipe};
}

export function deleteRecipeSuccess(recipes) {
  return {type: types.DELETE_RECIPE_SUCCESS, recipes};
}

export function loadRecipes() {
  return async (dispatch, getState) => {
    dispatch(beginAjaxCall());

    ApiClient.getAllRecipes().end((err, res) => {
      console.log(res);
      dispatch(loadRecipesSuccess(res.body));
    });

  };
}

export function saveRecipe(recipe) {
  return async (dispatch, getState) => {
    /*
    const saveRecipe = await recipeApi.saveRecipe(recipe);
    recipe.id ? dispatch(updateRecipeSuccess(saveRecipe)) :
      dispatch(createRecipeSuccess(saveRecipe));
      */
      dispatch(beginAjaxCall());
      ApiClient.saveRecipe(recipe).end((err, res)=>{
           if(!err){
               if(res.statusCode === 200
                   && res.body.message === "success"){
                   dispatch(createRecipeSuccess(res.body.data));
                   //dispatch(createRecipe(res.body.data));
               }else{
                   toastr.error("Error: " + res.body.message);
               }
           }else{
               toastr.error(err);
               //dispatch(createRecipeError(err));
           }
       });
       //recipe.id ? dispatch(updateRecipeSuccess(saveRecipe)) :
        //dispatch(createRecipeSuccess(saveRecipe));
  };
}

export function deleteRecipe(id) {
  return async (dispatch, getState) => {
    dispatch(beginAjaxCall());
    const recipes = await recipeApi.deleteRecipe(id);
    dispatch(deleteRecipeSuccess(recipes));
  };
}
