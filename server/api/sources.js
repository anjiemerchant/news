const router = require('express').Router();
const axios = require('axios');
const news = require('../news.js');

module.exports = router;

router.get('/', (req, res, next) => {
  let request = news.fetchSources();

  axios.request(request)
    .then(response => res.send(response.data))
    .catch(next)
  })

router.get(`/:sourceId`, (req, res, next) => {
  let request = news.fetchSourceArticles(req.params.sourceId);

  axios.request(request)
    .then(response => res.send(response.data))
    .catch(next)
  })
