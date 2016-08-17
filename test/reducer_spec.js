import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state:{
            recipes:[{id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit', ingredients : [{name:'ingre 1', quantity: '1 Kg'}, {name:'ingre 2', quantity: '1 Kg'}], preparation: '', status: 'active', editing: false},
                    {id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit', ingredients : [{name:'ingre 1', quantity: '2 Kg'}, {name:'ingre 2', quantity: '2 Kg'}], preparation: '', status: 'active', editing: false},
                    {id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit', ingredients : [{name:'ingre 1', quantity: '3 Kg'}, {name:'ingre 2', quantity: '3 Kg'}], preparation: '', status: 'active', editing: false}
                    ]
            }
        };
        
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
          recipes: [{id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit', ingredients : [{name:'ingre 1', quantity: '1 Kg'}, {name:'ingre 2', quantity: '1 Kg'}], preparation: '', status: 'active', editing: false},
                    {id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit', ingredients : [{name:'ingre 1', quantity: '2 Kg'}, {name:'ingre 2', quantity: '2 Kg'}], preparation: '', status: 'active', editing: false},
                    {id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit', ingredients : [{name:'ingre 1', quantity: '3 Kg'}, {name:'ingre 2', quantity: '3 Kg'}], preparation: '', status: 'active', editing: false}
                  ]
          }));

    });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
          recipes: [{id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit',
                    ingredients : [{name:'ingre 1', quantity: '1 Kg'},
                                  {name:'ingre 2', quantity: '1 Kg'}],
                    preparation: '', status: 'active', editing: false},
                    {id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit',
                    ingredients : [{name:'ingre 1', quantity: '2 Kg'},
                                  {name:'ingre 2', quantity: '2 Kg'}],
                    preparation: '', status: 'active', editing: false},
                    {id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit',
                    ingredients : [{name:'ingre 1', quantity: '3 Kg'},
                                  {name:'ingre 2', quantity: '3 Kg'}],
                    preparation: '', status: 'active', editing: false}
          ]
      }
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
        recipes:[{id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit',
                  ingredients : [{name:'ingre 1', quantity: '1 Kg'},
                                {name:'ingre 2', quantity: '1 Kg'}],
                  preparation: '', status: 'active', editing: false},
                  {id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit',
                  ingredients : [{name:'ingre 1', quantity: '2 Kg'},
                                {name:'ingre 2', quantity: '2 Kg'}],
                  preparation: '', status: 'active', editing: false},
                  {id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit',
                  ingredients : [{name:'ingre 1', quantity: '3 Kg'},
                                {name:'ingre 2', quantity: '3 Kg'}],
                  preparation: '', status: 'active', editing: false}
        ]
    }));

  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        recipes:[{id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit',
                  ingredients : [{name:'ingre 1', quantity: '1 Kg'},
                                {name:'ingre 2', quantity: '1 Kg'}],
                  preparation: '', status: 'active', editing: false},
                  {id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit',
                  ingredients : [{name:'ingre 1', quantity: '2 Kg'},
                                {name:'ingre 2', quantity: '2 Kg'}],
                  preparation: '', status: 'active', editing: false},
                  {id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit',
                  ingredients : [{name:'ingre 1', quantity: '3 Kg'},
                                {name:'ingre 2', quantity: '3 Kg'}],
                  preparation: '', status: 'active', editing: false}
        ]
      }
    };

    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      recipes:[{id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit',
                ingredients : [{name:'ingre 1', quantity: '1 Kg'},
                              {name:'ingre 2', quantity: '1 Kg'}],
                preparation: '', status: 'active', editing: false},
                {id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit',
                ingredients : [{name:'ingre 1', quantity: '2 Kg'},
                              {name:'ingre 2', quantity: '2 Kg'}],
                preparation: '', status: 'active', editing: false},
                {id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit',
                ingredients : [{name:'ingre 1', quantity: '3 Kg'},
                              {name:'ingre 2', quantity: '3 Kg'}],
                preparation: '', status: 'active', editing: false}
      ]
    }));
  });

});
