import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import {CookbookAppContainer} from './components/CookbookApp';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: {
      recipes: [
              {id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit',
              ingredients : [{name:'ingre 1', quantity: '1 Kg'},
                            {name:'ingre 2', quantity: '1 Kg'}],
              preparation: '', status: 'active'},
              {id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit',
              ingredients : [{name:'ingre 1', quantity: '2 Kg'},
                            {name:'ingre 2', quantity: '2 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit',
              ingredients : [{name:'ingre 1', quantity: '3 Kg'},
                            {name:'ingre 2', quantity: '3 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 4, name: 'Recipe 4', category: 'Pastas', chef: 'Roger Rabbit',
              ingredients : [{name:'ingre 1', quantity: '4 Kg'},
                            {name:'ingre 2', quantity: '4 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 5, name: 'Recipe 5', category: 'Pastas', chef: 'Roger Rabbit',
              ingredients : [{name:'ingre 1', quantity: '5 Kg'},
                            {name:'ingre 2', quantity: '5 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 6, name: 'Recipe 6', category: 'Pastas', chef: 'Roger Rabbit',
              ingredients : [{name:'ingre 1', quantity: '6 Kg'},
                            {name:'ingre 2', quantity: '6 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 7, name: 'Recipe 7', category: 'Salads', chef: 'Gaston',
              ingredients : [{name:'ingre 1', quantity: '7 Kg'},
                            {name:'ingre 2', quantity: '7 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 8, name: 'Recipe 8', category: 'Salads', chef: 'Gaston',
              ingredients : [{name:'ingre 1', quantity: '8 Kg'},
                            {name:'ingre 2', quantity: '8 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 9, name: 'Recipe 9', category: 'Salads', chef: 'Gaston',
              ingredients : [{name:'ingre 1', quantity: '9 Kg'},
                            {name:'ingre 2', quantity: '9 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 10, name: 'Recipe 10', category: 'Desserts', chef: 'Gaston',
              ingredients : [{name:'ingre 1', quantity: '10 Kg'},
                            {name:'ingre 2', quantity: '10 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 11, name: 'Recipe 11', category: 'Desserts', chef: 'Gaston',
              ingredients : [{name:'ingre 1', quantity: '11 Kg'},
                            {name:'ingre 2', quantity: '11 Kg'}],
              preparation: '', status: 'active', editing: false},
              {id: 12, name: 'Recipe 12', category: 'Desserts', chef: 'Gaston',
              ingredients : [{name:'ingre 1', quantity: '12 Kg'},
                            {name:'ingre 2', quantity: '12 Kg'}],
              preparation: '', status: 'active', editing: false}
      ],
      category: 'all'
    }
});

ReactDOM.render(
    <Provider store={store}>
        <CookbookAppContainer />
    </Provider>,
    document.getElementById('app')
);
