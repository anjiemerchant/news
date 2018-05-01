import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


 const Sources = ({displaySongs, name, spotifyId}) => {
  return (
        <div className="main">
            <h2>News Sources</h2>
            <h4>Click on a news source to display the top 10 articles.</h4>
            <div className="album-display">
            {displaySongs && displaySongs.map(song => {
              return (
                <div key={song.id} className="top-song">
                <Link to={`/songs/${song.id}`}>
                  <p>{song.name} by {song.artists[0].name}</p>
                  <img className="album-thumbmail" src={song.album.images[0].url} />
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
    displaySongs: state.songs.slice(0, 20),
    name: state.user.name,
    spotifyId: state.user.spotifyId
  })

export default connect(mapState, null)(Sources);
