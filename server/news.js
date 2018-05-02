module.exports = {
  fetchSources: () => ({
    url: `https://newsapi.org/v2/sources?apiKey=${process.env.API_KEY}`
  }),
  fetchSourceArticles: source => ({
    url: `https://newsapi.org/v2/top-headlines?sources=${source}&pagesize=10&apiKey=${process.env.API_KEY}`
  })
}
