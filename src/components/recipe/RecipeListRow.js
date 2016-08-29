import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export const RecipeListRow = ({recipe, onRemoveRecipe}) => {
    return(<tr>
        <td><Link to={'/recipe/' + recipe.id}>{recipe.name}</Link></td>
        <td>{recipe.chef}</td>
        <td>{recipe.category}</td>
        <td>{recipe.preparation}</td>
        <td>
          <input type="button"
                data-recipe-id={recipe.id}
                name="remove"
                value="-"
                onClick={onRemoveRecipe}
                className="btn-floating btn-small red"/>
        </td>
      </tr>
    );
}
