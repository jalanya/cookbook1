import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import CookbookApp from './components/CookbookApp';

const recipes = List.of(
    Map({id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit',
        ingredients : [{name:'ingre 1', quantity: '1 Kg'},
                        {name:'ingre 2', quantity: '1 Kg'}],
        preparation: '', status: 'active'}),
    Map({id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit',
        ingredients : [{name:'ingre 1', quantity: '2 Kg'},
                      {name:'ingre 2', quantity: '2 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit',
        ingredients : [{name:'ingre 1', quantity: '3 Kg'},
                      {name:'ingre 2', quantity: '3 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 4, name: 'Recipe 4', category: 'Pastas', chef: 'Roger Rabbit',
        ingredients : [{name:'ingre 1', quantity: '4 Kg'},
                      {name:'ingre 2', quantity: '4 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 5, name: 'Recipe 5', category: 'Pastas', chef: 'Roger Rabbit',
        ingredients : [{name:'ingre 1', quantity: '5 Kg'},
                      {name:'ingre 2', quantity: '5 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 6, name: 'Recipe 6', category: 'Pastas', chef: 'Roger Rabbit',
        ingredients : [{name:'ingre 1', quantity: '6 Kg'},
                      {name:'ingre 2', quantity: '6 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 7, name: 'Recipe 7', category: 'Salads', chef: 'Gaston',
        ingredients : [{name:'ingre 1', quantity: '7 Kg'},
                      {name:'ingre 2', quantity: '7 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 8, name: 'Recipe 8', category: 'Salads', chef: 'Gaston',
        ingredients : [{name:'ingre 1', quantity: '8 Kg'},
                      {name:'ingre 2', quantity: '8 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 9, name: 'Recipe 9', category: 'Salads', chef: 'Gaston',
        ingredients : [{name:'ingre 1', quantity: '9 Kg'},
                      {name:'ingre 2', quantity: '9 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 10, name: 'Recipe 10', category: 'Desserts', chef: 'Gaston',
        ingredients : [{name:'ingre 1', quantity: '10 Kg'},
                      {name:'ingre 2', quantity: '10 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 11, name: 'Recipe 11', category: 'Desserts', chef: 'Gaston',
        ingredients : [{name:'ingre 1', quantity: '11 Kg'},
                      {name:'ingre 2', quantity: '11 Kg'}],
        preparation: '', status: 'active', editing: false}),
    Map({id: 12, name: 'Recipe 12', category: 'Desserts', chef: 'Gaston',
        ingredients : [{name:'ingre 1', quantity: '12 Kg'},
                      {name:'ingre 2', quantity: '12 Kg'}],
        preparation: '', status: 'active', editing: false})
);

const category = 'all';

ReactDOM.render(
    <CookbookApp recipes={recipes} category={category} />,
    document.getElementById('app')
);
