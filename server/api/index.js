const router = require('express').Router()
var axios = require('axios')
const news = require('../news.js')
module.exports = router

router.get('/sources', (req, res, next) => {
  let request = news.fetchSources()

  axios.request(request)
    .then(response => res.send(response.data))
    .catch(next)
  });

router.get(`/sources/:sourceId`, (req, res, next) => {
  let request = news.fetchSourceArticles(req.params.sourceId)

  axios.request(request)
    .then(response => res.send(response.data))
    .catch(next)
  });

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
