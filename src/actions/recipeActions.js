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

export function deleteRecipeSuccess(id) {
  return {type: types.DELETE_RECIPE_SUCCESS, id};
}

export function loadRecipes() {
  return async (dispatch, getState) => {
    dispatch(beginAjaxCall());

    let client = new ApiClient();

    client.getAllRecipes().end((err, res) => {
      console.log(res);
      dispatch(loadRecipesSuccess(res.body));
    });
    client = null;
  };
}

export function saveRecipe(recipe) {
  return async (dispatch, getState) => {
    /*
    const saveRecipe = await recipeApi.saveRecipe(recipe);
    recipe.id ? dispatch(updateRecipeSuccess(saveRecipe)) :
      dispatch(createRecipeSuccess(saveRecipe));
      */
      //return new Promise((resolve, reject) => {
            dispatch(beginAjaxCall());
            debugger;
            let client = new ApiClient();
            const result = client.saveRecipe(recipe).end((err, res) => {
               if (!err) {
                   if (res.statusCode === 200
                       && res.body.message === "success") {
                       recipe.id ? dispatch(updateRecipeSuccess(res.body.data)) :
                          dispatch(createRecipeSuccess(res.body.data));
                      //resolve();
                   } else {
                       toastr.error("Error: " + res.body.message);
                      //reject();
                   }
               } else {
                   toastr.error(err);
                   //dispatch(createRecipeError(err));
               }
            });
            client = null;
     //});
  };
}

export function deleteRecipe(id) {
  return async (dispatch, getState) => {
    dispatch(beginAjaxCall());
    let client = new ApiClient();

    const result = client.deleteRecipe(id).end((err, res)=>{
                    if(!err){
                        dispatch(deleteRecipeSuccess(id));
                    }else{
                        //dispatch(deleteRecipeError(err));
                    }
                });
    client = null;
  };
}
