import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import {RecipeForm} from './RecipeForm';
import {categoriesFormattedForDropdown} from '../../selectors/selectors';
import autobind from 'autobind-decorator';
import toastr from 'toastr';

const mapStateToProps = (state, ownProps) => {
  const recipeId = ownProps.params.id; // from the path `/course/:id`

  let recipe = {id: '', name: '', category: '', chef: '', preparation: ''};

  if (recipeId && state.recipes.length > 0) {
    recipe = getRecipeById(state.recipes, recipeId);
  }

  return {
    recipe: recipe,
    categories: categoriesFormattedForDropdown(state.categories)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ManageRecipePage extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };

  static propTypes = {
    recipe: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      recipe: Object.assign({}, props.recipe),
      errors: {},
      saving: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.recipe.id != nextProps.recipe.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({recipe: Object.assign({}, nextProps.recipe)});
    }
  }

  @autobind
  updateRecipeState(event) {
    debugger;
    if (event.name) {
      let recipe = this.state.recipe;
      recipe[event.name] = event.value;
      return this.setState({ recipe: recipe });
    }
    else {
      let recipe = this.state.recipe;
      recipe[event.target.name] = event.target.value;
      return this.setState({ recipe: recipe });
    }
  }

  recipeFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.recipe.name.length < 5) {
      errors.name = 'Name must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  @autobind
  saveRecipe(event) {
    debugger;
    event.preventDefault();

    if (!this.recipeFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveRecipe(this.state.recipe)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Recipe saved');
    this.context.router.push('/recipes/all');
  }

  render() {
    return (
      <RecipeForm
        allCategories={this.props.categories}
        onChange={this.updateRecipeState}
        onSave={this.saveRecipe}
        recipe={this.state.recipe}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

function getRecipeById(recipes, id) {
  const recipe = recipes.filter(recipe => recipe.id == id);
  if (recipe.length) return recipe[0]; //since filter returns an array, have to grab the first.
  return null;
}
