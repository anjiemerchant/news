const Sequelize = require('sequelize')
const db = require('../db')

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING
  },
  source: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  publishedAt: {
    type: Sequelize.STRING,
  },
  urlToImage: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING
  },

})

module.exports = Article
