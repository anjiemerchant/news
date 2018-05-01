import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

 const Sources = props => {
  return (
        <div className="main">
            <h2>News Sources</h2>
            <h4>Click on a news source to display the top 10 articles.</h4>
            <div className="album-display">
            {props.displaySources && props.displaySources.map(source => {
              return (
                <div key={source.id} className="top-song">
                <Link to={`/sources/${source.id}`}>
                  <p>{source.name}</p>
                  <p>{source.description}</p>
                </Link>
                </div>
              )
            })}
            </div>
          </div>
        )
  }

// Container
const mapState = state => ({
  displaySources: state.sources.filter(source =>
    source.id === "the-new-york-times" ||
    source.id === "bbc-news" ||
    source.id === "the-hindu" ||
    source.id === "the-guardian-uk" ||
    source.id === "al-jazeera-english"
  )
})

export default connect(mapState, null)(Sources);
