const User = require('./user');
const Article = require('./article');

module.exports = {
  User,
  Article
}

Article.belongsToMany(User, {through: "UserArticle"});
User.belongsToMany(Article, {through: "UserArticle"});
