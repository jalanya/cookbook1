import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import {RecipeList} from './RecipeList';
import {browserHistory} from 'react-router';
import autobind from 'autobind-decorator';


@connect(
  state => ({
    recipes: state.recipes
  }),
  dispatch => ({
    actions: bindActionCreators(recipeActions, dispatch)
  })
)

export default class RecipesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  recipeRow(recipe, index) {
    return <div key={index}>{recipe.name}</div>;
  }

  @autobind
  redirectToAddRecipePage() {
    browserHistory.push('/recipe');
  }

  render() {

    var recipes = this.props.recipes.filter(
                recipe => this.props.params.category == 'all' || recipe.categoryTag === this.props.params.category
    );

    return (
      <div>
        <h1>All Recipes</h1>
        <input type="submit"
               value="Add Recipe"
               className="btn btn-primary"
               onClick={this.redirectToAddRecipePage}/>
             <RecipeList recipes={recipes}/>
      </div>
    );
  }
}

RecipesPage.propTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
