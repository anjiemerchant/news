const db = require('../db')
const Article = require('./article')
import chai from 'chai';
const expect = chai.expect;

  describe('Article Model', () => {
      beforeEach('Synchronize and clear database', () => db.sync({force: true}));
      after('Synchronize and clear database', () => db.sync({force: true}));
      it('has the expected schema definition', () => {
            expect(Article.attributes.url).to.be.an('object');
          });
          describe('validations', () => {
              it('validates whether the url field is a url', () => {
                  const article = Article.build({url: 'wrax'});
                  return article.validate()
                      .then(() => {
                          throw new Error('Promise should have rejected');
                        })
                      .catch(err => {
                          expect(err).to.be.an('error');
                          expect(err.name).to.equal('SequelizeValidationError')
                      });
              });

          });

      });
