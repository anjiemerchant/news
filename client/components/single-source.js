import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleSourceArticles, saveArticle} from '../store';
import {ArticleDisplay} from './article-display'

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

  handleClick(articleUrl, event) {
    event.preventDefault()
    const clickedArticle = this.state.singleSourceArticles.filter(article => article.url === articleUrl)[0]
    const {title, description, urlToImage, url, publishedAt} = clickedArticle
    const source = clickedArticle.source.name
    const sourceId = clickedArticle.source.id
    const userId = this.props.user.id
    this.props.saveArticle({source, sourceId, title, description, urlToImage, url, publishedAt, userId})
  }

  render() {
    if (!this.state.singleSourceArticles) return <h1> Top stories loading...</h1>;
    else {
      const articles = this.state.singleSourceArticles
      return (
        <div>
        <h2>Today's top articles from {this.props.singleSource}</h2>
        <ArticleDisplay articles={articles} showButtons={true} handleClick={this.handleClick} />
        </div>
      )
    }
  }
}

// Container
const mapState = state => {
  return {
    singleSourceArticles: state.singleSourceArticles,
    singleSource: state.singleSourceArticles.length ? state.singleSourceArticles[0].source.name : '',
    user: state.user
  }
}

const mapDispatch = {fetchSingleSourceArticles, saveArticle}

export default connect(mapState, mapDispatch)(SingleSource);
