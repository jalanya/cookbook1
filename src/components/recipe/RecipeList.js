import React, {PropTypes} from 'react';
import {RecipeListRow} from './RecipeListRow';

export const RecipeList = ({recipes, onRemoveRecipe}) => {
  return (<table className="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Chef</th>
              <th>Category</th>
              <th>Preparation</th>
            </tr>
            </thead>
            <tbody>
            {recipes.map(recipe =>
                <RecipeListRow key={recipe.id} onRemoveRecipe={onRemoveRecipe} recipe={recipe}/>
            )}
            </tbody>
      </table>
    );
};
