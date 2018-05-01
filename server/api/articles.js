const router = require('express').Router()
const { Article } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Article.findAll({
    where: { userId: req.user.id}
  })
  .then(articles => res.json(articles))
  .catch(next);
})

router.post('/', (req, res, next) => {
  console.log(req.body, "req.body")
  Article.create(req.body)
  .then(newArticle => res.json(newArticle))
  .catch(next)
})
