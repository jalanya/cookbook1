import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RecipeItem from './RecipeItem';

export default class RecipeList extends React.Component {
  constructor (props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getItems() {

    if (this.props.recipes) {
      return this.props.recipes.filter(
        (item) => this.props.category === 'all' || item.get('category') === this.props.category
      );
    }
    return [];
  }

  render() {
    return <section className="main">
        <ul className="recipe-list">
          {this.getItems().map(item =>
              <RecipeItem key={item.get('id')}
                      name={item.get('name')} />
          )}
        </ul>
    </section>
  }
};
