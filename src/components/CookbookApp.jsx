import React from 'react';
import RecipeList from './RecipeList';

export default class CookbookApp extends React.Component {

  render() {
    return <div>
        <section className="cookbook-app">
            <RecipeList recipes={this.props.recipes} category={this.props.category}/>
        </section>
    </div>
  }
};
