import React from 'react';
import {TextInput} from '../common/TextInput';
import {SelectInput} from '../common/SelectInput';
import {IngredientForm} from './IngredientForm';

export const RecipeForm = ({recipe, allCategories, onSave, onChange, onChangeIngredient, onAdd, onRemove, saving, errors}) => {
    return (
          <div>
            <div className="card-panel">
              <h4 className="header">Manage Recipe</h4>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <TextInput
                      name="name"
                      label="Name"
                      value={recipe.name}
                      onChange={onChange}
                      error={errors.name}/>
                  </div>
                  <div className="row">
                    <SelectInput
                      name="category"
                      label="Category"
                      value={recipe.category}
                      defaultOption="Select category"
                      options={allCategories}
                      onChange={onChange} error={errors.category}/>
                  </div>
                  <div className="row">
                    <TextInput
                      name="chef"
                      label="Chef"
                      value={recipe.chef}
                      onChange={onChange}
                      error={errors.chef}/>
                  </div>
                  <IngredientForm
                      name="ingredients"
                      ingredients={recipe.ingredients}
                      onChange={onChangeIngredient}
                      onAdd={onAdd}
                      onRemove={onRemove}
                   />
                  <div className="row">
                    <TextInput
                          name="preparation"
                          label="Preparation"
                          value={recipe.preparation}
                          onChange={onChange}
                          error={errors.preparation}/>
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      disabled={saving}
                      value={saving ? 'Saving...' : 'Save'}
                      className="btn btn-primary"
                      onClick={onSave}/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
};
