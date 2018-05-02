const Sequelize = require('sequelize')
const db = require('../db')

// The database schema is currently set up in a denormalized fashion; if different users saved the same article, the article would appear twice. To make the database more normalized and eliminate the row redundancies, Article and User could be connected by a "belongs-to-many" association aka a join table. Joins become more expensive as the size of the app grows, so there are tradeoffs to both approaches.
const Article = db.define('article', {
  title: {
    type: Sequelize.STRING
  },
  source: {
    type: Sequelize.STRING
  },
  sourceId: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  publishedAt: {
    type: Sequelize.STRING,
  },
  urlToImage: {
    type: Sequelize.TEXT,
  },
  url: {
    type: Sequelize.TEXT
  },

})

module.exports = Article
