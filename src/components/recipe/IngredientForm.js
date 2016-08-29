import React, {PropTypes} from 'react';
import {IngredientItem} from './IngredientItem';

export const IngredientForm = ({name, ingredients, onChange, onAdd, onRemove}) => {
    return (
      <div className='row'>
        <div className='row'>
          <div className="col s12">
             <div className="col s6">
               <h4 className="header">Ingredients</h4>
             </div>
             <div className="input-field col s6">
              <input type="button"
                  value="+"
                  onClick={onAdd}
                  className="btn-floating btn-small red"/>
             </div>
          </div>
        </div>
        <div className='row'>
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
