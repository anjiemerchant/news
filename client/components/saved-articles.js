import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSavedArticles} from '../store';
import {toDate} from '../../utils';
import {ArticleDisplay} from './article-display'

class SavedArticles extends Component {

  componentDidMount() {
    this.props.fetchSavedArticles()
  }

  render() {
    if (!this.props.savedArticles) return <h2> Saved stories loading...</h2>;
    else if (this.props.savedArticles.length === 0) return <h2> You have no saved articles </h2>
    else {
      const articles = this.props.savedArticles
      return (
        <div>
        <h2>Your Saved Articles</h2>
          <ArticleDisplay articles={articles} showButtons={false} />
        </div>
      )
    }
  }
}


// Container
const mapState = state => {
  return ({
    savedArticles: state.savedArticles
  })
}

const mapDispatch = {fetchSavedArticles}

export default connect(mapState, mapDispatch)(SavedArticles);
