import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleSourceArticles} from '../store';

class SingleSource extends Component {

  constructor(props) {
    super(props);

    this.state = {
      singleSourceArticles: this.props.singleSourceArticles
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
    if (!this.state.singleSourceArticles) return <div />;
    else {
      const articles = this.state.singleSourceArticles
      return (
        <div className="album-display">
          <ol>
          Today's top articles from {this.props.singleSource}
              {articles.map(article => {
                  return (
                    <li key={article.url} className="top-song">
                      <a href={article.url} target="_blank">
                        <p>{article.title} by {article.author} </p>
                      </a>
                        <p>{article.description}</p>
                        <button onClick={this.handleClick} className="btn btn-warning button-fix">Save to My Articles</button>
                    </li>
                  )
                })}
          </ol>
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
