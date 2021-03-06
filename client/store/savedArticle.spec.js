import {expect} from 'chai';
import savedArticleReducer, {getAllSavedArticles, addNewArticle, GET_ALL_SAVED_ARTICLES, ADD_NEW_ARTICLE} from './savedArticles';
import {createStore} from 'redux';
import {range, last} from 'lodash';

const createRandomArticles = amount => {
  return range(0, amount).map(index => {
      return {
          id: index + 1,
          title: `test + ${index + 1}`,
      }
  })
}

describe('savedArticle redux architecture', () => {
  describe('action creators', () => {
      describe('addNewArticle', () => {
          it('returns expected action description', () => {
              const article = createRandomArticles(5);
              const actionDescriptor = addNewArticle(article);
              expect(actionDescriptor).to.be.deep.equal({
                  type: ADD_NEW_ARTICLE,
                  article: article
              });
          });
      });

      describe('getAllSavedArticles', () => {
          it('returns expected action description', () => {
              const articles = createRandomArticles(5);
              const actionDescriptor = getAllSavedArticles(articles);
              expect(actionDescriptor).to.be.deep.equal({
                  type: GET_ALL_SAVED_ARTICLES,
                  articles: articles
              });
          });
      });
  });
});

describe('savedArticle reducer', () => {
  let testingStore;

  beforeEach('Create testing store from reducer', () => {
      testingStore = createStore(savedArticleReducer);
  });

  it('has an initial state as described', () => {
      const currentStoreState = testingStore.getState();
      expect(currentStoreState).to.be.deep.equal([]);
  });

  describe('reducing on ADD_NEW_ARTICLE', () => {
      let existingRandomArticles;
      beforeEach(() => {
          existingRandomArticles = createRandomArticles(5);
          testingStore = createStore(
              savedArticleReducer,
              existingRandomArticles
          );
      });

      it('affects the state by appending a new article to state saved articles', () => {
          const newArticle = createRandomArticles(1);
          testingStore.dispatch({
              type: ADD_NEW_ARTICLE,
              article: newArticle
          });
          const newState = testingStore.getState()
          const lastArticleOnState = last(newState);
          expect(newState).to.have.length(6);
          expect(lastArticleOnState).to.be.deep.equal(newArticle);
      });

      it('sets savedArticles to different array from previous state', () => {
          const originalState = testingStore.getState();
          const newArticle = createRandomArticles(1);
          testingStore.dispatch({
            type: ADD_NEW_ARTICLE,
            article: newArticle
          });
          const newState = testingStore.getState();
          expect(newState).to.not.be.equal(originalState);
          expect(originalState).to.have.length(5);
      });
  });
});
