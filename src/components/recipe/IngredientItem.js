import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { TextInput } from '../common/TextInput';
import styles from './IngredientItem.css';

export const IngredientItem = ({ingredient, row, onChange, onRemove}) => {
    return (
        <div className="row">
          <div className="input-field col s5">
            <input type="text"
                data-row={row}
                name="name"
                value={ingredient.name}
                onChange={onChange}/>
          </div>
          <div className="input-field col s5">
            <input type="text"
                  data-row={row}
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={onChange}/>
          </div>
          <div className="input-field col s2">
            <input type="button"
                  data-row={row}
                  name="remove"
                  value="-"
                  onClick={onRemove}
                  className="btn-floating btn-small red"/>
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
