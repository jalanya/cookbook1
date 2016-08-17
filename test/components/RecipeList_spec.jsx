import React from 'react';
import TestUtils from 'react-addons-test-utils';
import RecipeList from '../../src/components/RecipeList';
import {expect} from 'chai';
import {List, Map} from 'immutable';

const {renderIntoDocument,
      scryRenderedDOMComponentsWithTag} = TestUtils;


describe('Aplication logic - Recipe List', () => {

  it('renders a list with all the recipes', () => {
    const recipes = List.of(
      Map({id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit', preparation: '', status: 'active'}),
      Map({id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit', preparation: '', status: 'active', editing: false}),
      Map({id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit', preparation: '', status: 'completed', editing: false})
    );
    const category = 'all';
    const component = renderIntoDocument(
      <RecipeList recipes={recipes} category={category} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(3);
    expect(items[0].textContent).to.contain('Ceviche');
    expect(items[1].textContent).to.contain('Anticucho');
    expect(items[2].textContent).to.contain('Arroz con Pollo');

  });

  it('renders a list with only the recipes if the category is Pastas', () => {

    const recipes = List.of(
      Map({id: 1, name: 'Ceviche', category: 'Meat', chef: 'Roger Rabbit', preparation: '', status: 'active'}),
      Map({id: 2, name: 'Anticucho', category: 'Meat', chef: 'Roger Rabbit', preparation: '', status: 'active', editing: false}),
      Map({id: 3, name: 'Arroz con Pollo', category: 'Meat', chef: 'Roger Rabbit', preparation: '', status: 'completed', editing: false}),
      Map({id: 4, name: 'Recipe 4', category: 'Pastas', chef: 'Roger Rabbit', preparation: '', status: 'active', editing: false}),
      Map({id: 5, name: 'Recipe 5', category: 'Pastas', chef: 'Roger Rabbit', preparation: '', status: 'active', editing: false})
    );

    const category = 'Pastas';
    const component = renderIntoDocument(
      <RecipeList recipes={recipes} category={category} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(2);
    expect(items[0].textContent).to.contain('Recipe 4');
    expect(items[1].textContent).to.contain('Recipe 5');

  });

});
