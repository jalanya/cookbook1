import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default class RecipeItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {

    var itemClass = classNames({
        'todo': true,
        'completed': this.props.isCompleted,
        'editing': this.props.isEditing
    });

    return <li className={itemClass}>
        <div className="view">
          <label htmlFor="todo">
            {this.props.name}
          </label>
        </div>
    </li>
  }
}
