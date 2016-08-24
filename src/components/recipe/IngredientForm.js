import React, {PropTypes} from 'react';
import {IngredientItem} from './IngredientItem';

export const IngredientForm = ({name, ingredients, onChange, onAdd, onRemove}) => {

    return (
      <div className='row'>
            <h4 className="header">Ingredients</h4>
            <input type="button"
                value="+"
                onClick={onAdd}
                className="btn-floating btn-large waves-effect waves-light red"/>
            {ingredients.map((ingredient, index) =>
                <IngredientItem
                  key={index}
                  row={index}
                  ingredient={ingredient}
                  onChange={onChange}
                  onRemove={onRemove} />
              )
            }
        </div>
    );
};

IngredientForm.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};
