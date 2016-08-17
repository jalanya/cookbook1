import React from 'react';
import RecipeList from './RecipeList';
import {connect} from 'react-redux';

export default class CookbookApp extends React.Component {

  render() {
    return <div>
        <section className="cookbook-app">
            <RecipeList recipes={this.props.recipes} category={this.props.category}/>
        </section>
    </div>
  }
};

function mapStateToProps(state) {
  return {
    recipes: state.get('recipes'),
    category: state.get('category')
  };
}

export const CookbookAppContainer = connect(mapStateToProps)(CookbookApp);
