import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {TextInput} from '../common/TextInput';

export const IngredientItem = ({ingredient, row, onChange, onRemove}) => {
    return (
        <div className="row">
            <input type="text"
                data-row={row}
                name="name"
                value={ingredient.name}
                onChange={onChange}
                wrapperClass="s5"/>
            <input type="text"
                data-row={row}
                name="quantity"
                value={ingredient.quantity}
                onChange={onChange}
                wrapperClass="s5"/>
            <div className="input-field col s2">
              <div className="input-field col s12">
                <input type="button"
                      data-row={row}
                      name="remove"
                      value="-"
                      onClick={onRemove}
                      className="btn-floating btn-large waves-effect waves-light red"/>
              </div>
            </div>
        </div>
    );
};

IngredientItem.propTypes = {
    ingredient: PropTypes.object.isRequired,
    row: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};
