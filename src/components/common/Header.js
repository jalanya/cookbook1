import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div>
      <Link to="/recipes" activeClassName="active">All Recipes</Link>
      {" | "}
      <Link to="/recipes/pastas" activeClassName="active">Pastas</Link>
      {" | "}
      <Link to="/recipes/salads" activeClassName="active">Salads</Link>
      {" | "}
      <Link to="/recipes/meat" activeClassName="active">Meat</Link>
      {" | "}
      <Link to="/recipes/sesserts" activeClassName="active">Desserts</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
