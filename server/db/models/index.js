const User = require('./user')
const Article = require('./article')

module.exports = {
  User,
  Article
}

Article.belongsTo(User);
User.hasMany(Article);
