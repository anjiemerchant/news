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
    console.log('source', source)
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
    return (
      <h1>test</h1>
    )
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
