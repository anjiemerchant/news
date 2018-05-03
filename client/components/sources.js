import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

 const Sources = ({displaySources}) => {
  return (
        <div className="main">
            <h2>News Providers: Click on a source listed below to display the provider's top headlines</h2>
            <div>
            {displaySources && displaySources.map(source => {
              return (
                <div key={source.id}>
                <Link to={`/sources/${source.id}`}>
                  <h3>{source.name}</h3></Link>
                  <p>{source.description}</p>
                </div>
              )
            })}
            </div>
          </div>
        )
  }

const mapState = state => ({
  displaySources: state.sources.filter(source =>
    source.id === "the-new-york-times" ||
    source.id === "bbc-news" ||
    source.id === "the-hindu" ||
    source.id === "the-guardian-uk" ||
    source.id === "al-jazeera-english"
  )
});

export default connect(mapState, null)(Sources);
