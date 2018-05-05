const db = require('../db');
const Article = require('./article');
const {User} = require('./index.js');
const chai = require('chai');
const expect = chai.expect;
const Promise = require('bluebird');

  describe('Article Model', () => {

      beforeEach('Synchronize and clear database', () => db.sync({force: true}));
      let article;
      after('Synchronize and clear database', () => db.sync({force: true}));

      describe('associations', function(){

        it("belongs to many users", function() {

          const creatingFirstUser = User.create({ name: 'Samantha Vilaboa', email: 'samantha@gmail.com'});
          const creatingSecondUser = User.create({ name: 'Rachel Forst', email: 'rachel@gmail.com'});
          const creatingfirstArticle = Article.create({
            title: 'Indian Summer',
            source: 'The New York Times'
          });

          return Promise.all([creatingFirstUser, creatingSecondUser, creatingfirstArticle])
            .spread((createdUserOne, createdUserTwo, createdArticle) => {
                return createdArticle.setUsers([createdUserOne, createdUserTwo])
            })
          .then(() => {
             return Article.findOne({
              where: { title: 'Indian Summer' },
              include: { all: true }
            });
          })
          .then(foundArticle => {
            expect(foundArticle.users).to.have.length(2)
            expect(foundArticle.users[0].dataValues.email).to.equal('samantha@gmail.com')
          });

        });

      });

