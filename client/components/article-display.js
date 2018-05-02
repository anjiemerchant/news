import React from 'react';
import {toDate} from '../../utils';
import {Link} from 'react-router-dom';

export const ArticleDisplay = ({articles, showButtons, handleClick}) => {
return (
  <div className="article-display">
      {articles.map(article => {
          return (
          <div key={article.url} className="article">
            <a href={article.url} target="_blank">
                <p><b>{article.title}</b></p>
                <img src={article.urlToImage} />
            </a>
            {!!article.publishedAt && <p>Published: {toDate(article.publishedAt)}</p>}
            <p>{article.description}</p>
            {showButtons ? <button onClick={e => handleClick(article.url, e)} className="btn btn-warning button-fix">Save to My Articles</button> : <Link to={`/sources/${article.sourceId}`}>
             <p className="link">More from {article.source}</p></Link> }
           </div>
          )
      })}
  </div>
)}
