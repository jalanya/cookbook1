import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function changeCategory(state, category) {
  return state.set('category', category)
}
export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'CHANGE_CATEGORY':
      return changeCategory(state, action.category);
  }
  return state;
}
