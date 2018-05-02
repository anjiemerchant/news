const router = require('express').Router();
const {Article} = require('../db/models');
const {User} = require('../db/models');
const {isLoggedIn} = require('../../utils.js');
module.exports = router;

router.get('/', isLoggedIn, (req, res, next) => {
  const userId = req.user.id;
  User.findById(userId)
    .then(user => user.getArticles())
    .then(articles => {
      res.json(articles)
    })
    .catch(next);
})

router.post('/', isLoggedIn, (req, res, next) => {
  const {title, source, sourceId, description, publishedAt, urlToImage, url} = req.body;
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
