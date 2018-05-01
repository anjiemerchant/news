import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';
import {Login, Signup, UserHome, Sources, SingleSource, SavedArticles} from './components';
import {me, fetchSources} from './store';

class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/sources" component={Sources} />
        <Route path="/sources/:sourceId" component={SingleSource} />
        <Route path="/saved" component={SavedArticles} />
        {
          isLoggedIn &&
            <Switch>
              <Route path="/home" component={UserHome} />
            </Switch>
        }
        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchSources())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
