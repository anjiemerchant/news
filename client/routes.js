import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';
import {Login, Signup, Sources, SingleSource, SavedArticles} from './components';
import {me, fetchSources} from './store';

class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData();
  }

  render () {
    const {isLoggedIn} = this.props;

    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {
          isLoggedIn &&
            <Switch>
              <Route exact path="/sources" component={Sources} />
              <Route path="/sources/:sourceId" component={SingleSource} />
              <Route path="/saved" component={SavedArticles} />
            </Switch>
        }
        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = state => ({
    isLoggedIn: !!state.user.id
  });

const mapDispatch = dispatch => ({
    loadInitialData () {
      dispatch(me())
      dispatch(fetchSources())
    }
});

export default withRouter(connect(mapState, mapDispatch)(Routes));
