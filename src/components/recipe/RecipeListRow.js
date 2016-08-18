import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const RecipeListRow = ({recipe}) => {
  return (
    <tr>
      <td><Link to={'/recipe/' + recipe.id}>{recipe.name}</Link></td>
      <td>{recipe.chef}</td>
      <td>{recipe.category}</td>
    </tr>
  );
};

RecipeListRow.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeListRow;