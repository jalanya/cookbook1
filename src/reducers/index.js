import {combineReducers} from 'redux';
import recipes from './recipeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  recipes,
  ajaxCallsInProgress
});

export default rootReducer;
