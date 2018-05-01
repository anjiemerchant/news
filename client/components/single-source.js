import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleSourceArticles} from '../store';

class SingleSource extends Component {

  constructor(props) {
    super(props);

    this.state = {
      singleSourceArticles: this.props.singleSourceArticles,
    }
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

  render() {
    if (!this.state.singleSourceArticles) return <div />;
    else {
      const articles = this.state.singleSourceArticles
      return (
        <div className="album-display">
          <ol>
          Today's top articles
              {articles.map(article => {
                  return (
                    <li key={article.url} className="top-song">
                      <a href={article.url}>
                        <p>{article.description}</p>
                      </a>
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
    singleSourceArticles: state.singleSourceArticles
  }
}

const mapDispatch = {fetchSingleSourceArticles}

export default connect(mapState, mapDispatch)(SingleSource);
