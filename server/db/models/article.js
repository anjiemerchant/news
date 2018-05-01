const Sequelize = require('sequelize')
const db = require('../db')

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
