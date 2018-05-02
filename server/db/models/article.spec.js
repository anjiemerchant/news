const db = require('../db');
const Article = require('./article');
const {User} = require('./index.js');
const chai = require('chai')
const expect = chai.expect;
const Promise = require('bluebird');

  describe('Article Model', () => {

      beforeEach('Synchronize and clear database', () => db.sync({force: true}));
      let article;
      after('Synchronize and clear database', () => db.sync({force: true}));

        describe('validations', () => {
            it('validates whether the url field is a url', () => {
                article = Article.build({source: 'The BBC', url: 'this is not a url'});
                  return article.validate()
                      .then(() => {
                          throw new Error('Promise should have rejected');
                        })
                      .catch(err => {
                          expect(err).to.be.an('error');
                          expect(err.name).to.equal('SequelizeValidationError')
                      });
              });

              it('validates whether the urlToImage field is a url', () => {
                article = Article.build({source: 'The BBC', urlToImage: 'not a url at all'});
                  return article.validate()
                      .then(() => {
                          throw new Error('Promise should have rejected');
                        })
                      .catch(err => {
                          expect(err).to.be.an('error');
                          expect(err.name).to.equal('SequelizeValidationError')
                      });
              });

              it('requires `content`', function () {
                article = Article.build({url: 'www.test.com'});
                return article.validate()
                .then(() => {
                  throw new Error('validation should fail when content is null');
                },
                result => {
                  expect(result).to.be.an.instanceOf(Error);
                });
          });
        });
      });

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

