import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="container nav">
    <div className="container">
      <img className="nav-img" src="/newspaper.png" alt="newspaper logo" />
      <h1>Everything New(s)</h1>
    </div>
    <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/sources">News Sources</Link>
          <Link to="/saved">My Saved Articles</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
)

const mapState = state => ({
  isLoggedIn: !!state.user.id
});

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar);

