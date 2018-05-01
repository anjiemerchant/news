import React from 'react';
import {toDate} from '../../utils'

export const ArticleDisplay = props => {
  const articles = props.articles
  return (
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
)}
