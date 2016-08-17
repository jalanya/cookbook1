import React from 'react';
import TestUtils from 'react-addons-test-utils';
import RecipeItem from '../../src/components/RecipeItem';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = TestUtils;

describe('Aplication logic - Recipe item', () => {
  it('renders an item', () => {
    const name = 'Ceviche';
    const component = renderIntoDocument(
      <RecipeItem name={name} />
    );
    const recipe = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(recipe.length).to.equal(1);
    expect(recipe[0].textContent).to.contain('Ceviche');
  });

  it('strikes through the item if it is completed', () => {
    const name = 'Ceviche';
    const component = renderIntoDocument(
      <RecipeItem name={name} isCompleted={true}/>
    );
    const recipe = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(recipe[0].classList.contains('completed')).to.equal(true);
  });

  it('should look different when editing', () => {
    const name = 'Ceviche';
    const component = renderIntoDocument(
      <RecipeItem name={name} isEditing={true}/>
    );
    const recipes = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(recipes[0].classList.contains('editing')).to.equal(true);
  });

});
