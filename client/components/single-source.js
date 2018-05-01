import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleSourceArticles} from '../store';
import {toDate} from '../../utils'

class SingleSource extends Component {

  constructor(props) {
    super(props);

    this.state = {
      singleSourceArticles: this.props.singleSourceArticles
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
    const source = this.props.match.params.sourceId;
    this.props.fetchSingleSourceArticles(source)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.singleSourceArticles !== this.props.singleSourceArticles) {
      this.setState({
        singleSourceArticles: newProps.singleSourceArticles
      })
    }
  }

  handleClick (event) {
    event.preventDefault()
    this.props.deleteProduct(this.state.currentProduct.id)
  }

  render() {
    if (!this.state.singleSourceArticles) return <h1> Top stories loading...</h1>;
    else {
      const articles = this.state.singleSourceArticles
      return (
        <div>
        <h2>Today's top articles from {this.props.singleSource}</h2>

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
                        <button onClick={this.handleClick} className="btn btn-warning button-fix">Save to My Articles</button>
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
  return {
    singleSourceArticles: state.singleSourceArticles,
    singleSource: state.singleSourceArticles.length ? state.singleSourceArticles[0].source.name : ''
  }
}

const mapDispatch = {fetchSingleSourceArticles}

export default connect(mapState, mapDispatch)(SingleSource);
