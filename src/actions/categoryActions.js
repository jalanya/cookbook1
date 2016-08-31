//import categoryApi from '../api/mockCategoryApi';
import CategoryApiClient from '../api/categoryApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function loadCategories() {
  /*return async (dispatch, getState) => {
    dispatch(beginAjaxCall());
    const categories = await categoryApi.getAllCategories();
    if (!categories) return;
    dispatch(loadCategoriesSuccess(categories));
  };*/

  return async (dispatch, getState) => {
    dispatch(beginAjaxCall());

    let client = new CategoryApiClient();
    client.getAllCategories().end((err, res) => {
      dispatch(loadCategoriesSuccess(res.body));
    });
    client = null;
  };

}
