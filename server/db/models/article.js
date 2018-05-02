const Sequelize = require('sequelize')
const db = require('../db')

// The database schema is currently set up in a normalized fashion, as Article and User are connected by a many-to-many relationship. As the database grows larger, joins take longer. It might be necessary to denormalize and accept redundancy for the sake of quicker querying.
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
    type: Sequelize.TEXT
  },
  publishedAt: {
    type: Sequelize.STRING,
  },
  urlToImage: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true
    }
  },
  url: {
    type: Sequelize.TEXT,
    unique: true,
    validate: {
      isUrl: true
    }
  }
})

module.exports = Article
