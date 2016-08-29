import React from 'react';
import {TextInput} from '../common/TextInput';
import {SelectInput} from '../common/SelectInput';
import {IngredientForm} from './IngredientForm';

export const RecipeForm = ({recipe, allCategories, onSave, onChange, onChangeIngredient, onAdd, onRemove, saving, errors}) => {
    return (
          <div>
            <div className="card-panel">
              <div className="row">
                <div className="col s12">
                  <h4 className="header">Manage Recipe</h4>
                </div>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <TextInput
                      name="name"
                      label="Name"
                      value={recipe.name}
                      onChange={onChange}
                      error={errors.name}
                      wrapperClass="s12"/>
                  </div>
                  <div className="row">
                    <SelectInput
                      name="category"
                      label="Category"
                      value={recipe.category}
                      defaultOption="Select category"
                      options={allCategories}
                      onChange={onChange} error={errors.category}
                      wrapperClass="s12"/>
                  </div>
                  <div className="row">
                    <TextInput
                      name="chef"
                      label="Chef"
                      value={recipe.chef}
                      onChange={onChange}
                      error={errors.chef}
                      wrapperClass="s12"/>
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
                          error={errors.preparation}
                          wrapperClass="s12"/>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="submit"
                        disabled={saving}
                        value={saving ? 'Saving...' : 'Save'}
                        className="btn btn-primary"
                        onClick={onSave}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
};
