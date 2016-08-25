import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import autobind from 'autobind-decorator';
import * as recipeActions from '../../actions/recipeActions';

@connect(
  state => ({
    recipes: state.recipes
  }),
  dispatch => ({
    actions: bindActionCreators(recipeActions, dispatch)
  })
)
export default class Header extends React.Component {
    static contextTypes = {
      router: PropTypes.object,
    };

    static propTypes = {
      recipes: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
    };

    constructor(props, context) {
      super(props, context);
    }

    @autobind
    searchRecipes(event) {
      debugger;
       if(event.key === 'Enter'){
         this.context.router.push('/recipe/search/' + event.target.value);
       }
    }

    render(){
      return(
        <div className="navbar">
           <nav className="darken-2">
             <a href="#" className="brand-logo">Cookbook</a>
             <div className="nav-wrapper container">
              <Link to="/recipes/all" activeClassName="active">Recipes</Link>
              {" | "}
              <Link to="/recipes/pastas" activeClassName="active">Pastas</Link>
              {" | "}
              <Link to="/recipes/salads" activeClassName="active">Salads</Link>
              {" | "}
              <Link to="/recipes/meat" activeClassName="active">Meat</Link>
              {" | "}
              <Link to="/recipes/desserts" activeClassName="active">Desserts</Link>
              {this.props.loading && <LoadingDots interval={100} dots={20}/>}
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                   <input id="search" type="search" placeholder="Recipe name"
                     onKeyPress={this.searchRecipes}/>
                </li>
                <li><i className="material-icons"></i>
                </li>
              </ul>
            </div>
          </nav>
       </div>
      );
    }
};
