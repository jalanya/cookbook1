import React from 'react';
import {TextInput} from '../common/TextInput';
import {SelectInput} from '../common/SelectInput';

export const RecipeForm = ({recipe, allCategories, onSave, onChange, saving, errors}) => {
    return (<form>
            <h1>Manage Recipe</h1>
            <TextInput
              name="name"
              label="Name"
              value={recipe.name}
              onChange={onChange}
              error={errors.name}/>

            <SelectInput
              name="category"
              label="Category"
              value={recipe.category}
              defaultOption="Select category"
              options={allCategories}
              onChange={onChange} error={errors.category}/>

            <TextInput
              name="chef"
              label="Chef"
              value={recipe.chef}
              onChange={onChange}
              error={errors.chef}/>

            <TextInput
                name="preparation"
                label="Preparation"
                value={recipe.preparation}
                onChange={onChange}
                error={errors.preparation}/>

            <input
              type="submit"
              disabled={saving}
              value={saving ? 'Saving...' : 'Save'}
              className="btn btn-primary"
              onClick={onSave}/>
          </form>
        );
};
