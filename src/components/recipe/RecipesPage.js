import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import {RecipeList} from './RecipeList';
import {browserHistory} from 'react-router';
import autobind from 'autobind-decorator';
import toastr from 'toastr';

@connect(
  state => ({
    recipes: state.recipes
  }),
  dispatch => ({
    actions: bindActionCreators(recipeActions, dispatch)
  })
)

export default class RecipesPage extends React.Component {

  static propTypes = {
    recipes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  recipeRow(recipe, index) {
    return <div key={index}>{recipe.name}</div>;
  }

  @autobind
  onRemoveRecipe(event) {

    this.setState({saving: true});

    this.props.actions.deleteRecipe(event.target.dataset.recipeId)
      .then(() => this.recipeDeleted())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
    });
  }

  @autobind
  redirectToAddRecipePage() {
    browserHistory.push('/recipe');
  }

  recipeDeleted() {
    toastr.success('Recipe deleted');
  }

  render() {
    var recipes = this.props.recipes.filter(
                recipe => (this.props.params.category == 'all' || recipe.category.toLowerCase() === this.props.params.category) ||
                          recipe.name.startsWith(this.props.params.name)
    );

    return (
      <div>
        <h1>Recipes</h1>
        <input type="submit"
               value="Add Recipe"
               className="btn btn-primary"
               onClick={this.redirectToAddRecipePage}/>
             <RecipeList recipes={recipes} onRemoveRecipe={this.onRemoveRecipe}/>
      </div>
    );
  }
}
