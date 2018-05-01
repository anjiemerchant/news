import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSavedArticles} from '../store';
import {toDate} from '../../utils'

class SavedArticles extends Component {

  componentDidMount() {
    this.props.fetchSavedArticles()
  }

  render() {
    if (!this.props.savedArticles) return <h1> Saved stories loading...</h1>;
    else {
      const articles = this.props.savedArticles
      return (
        <div>
        <h2>Your Saved Articles</h2>

          <div className="article-display">
                {articles.map(article => {
                    return (
                      <div key={article.url} className="article">
                        <a href={article.url} target="_blank">
                        <p><b>{article.title}</b></p>
                        <img src={article.urlToImage} />
                        </a>
                        <p>Published: {toDate(article.publishedAt)}</p>
                        <p>{article.description}</p>
                        <button onClick={(e) => this.handleClick(article.url, e)} className="btn btn-warning button-fix">Save to My Articles</button>
                      </div>
                    )
                  })}
            </div>
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
