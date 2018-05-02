const Sequelize = require('sequelize')
const db = require('../db')

// The database schema is currently set up in a normalized fashion, as Article and User are connected by a many-to-many relationship. As the the amount of data grows with an increasing number of users, joins will longer. It might be necessary to denormalize and accept redundancy for the sake of quicker querying.
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
      isUrl: {
        msg: 'Invalid Url'
      }
    }
  },
  url: {
    type: Sequelize.TEXT,
    unique: true,
    validate: {
      isUrl: {
        msg: 'Invalid Url'
      }
    }
  }
})

module.exports = Article
