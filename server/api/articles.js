const router = require('express').Router()
const {Article} = require('../db/models')
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  const userId = req.user.id
  User.findById(userId)
    .then(user => user.getArticles())
    .then(articles => {
      res.json(articles)
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  const {title, source, sourceId, description, publishedAt, urlToImage, url} = req.body
  Article.findOrCreate({
    where: {
      title,
      source,
      sourceId,
      description,
      publishedAt,
      urlToImage,
      url
    }
  })
    .spread((article, createdArticleBool) => {
      return article.addUser(req.user.id)
    })
  .then(article => {
    res.json(article)
  })
  .catch(next)
})
