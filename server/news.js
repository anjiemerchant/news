module.exports = {
  fetchSourceArticles: source => ({
    url: `https://newsapi.org/v2/top-headlines?sources=${source}&pagesize=10&apiKey=93accc70436c488b9a8f2b3581b40ee6`
  })
}
