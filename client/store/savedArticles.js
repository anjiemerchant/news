import axios from 'axios';

// action types
const GET_ALL_SAVED_ARTICLES = 'GET_ALL_SAVED_ARTICLES';
const ADD_NEW_ARTICLE = 'ADD_NEW_ARTICLE'

// action creators
const getAllSavedArticles = articles => ({type: GET_ALL_SAVED_ARTICLES, articles});
const addNewArticle = article => ({ type: ADD_NEW_ARTICLE, article })

// reducer
export default (savedArticles = [], action) => {
  switch (action.type) {
    case GET_ALL_SAVED_ARTICLES:
      return action.articles;
    case ADD_NEW_ARTICLE:
      return [...savedArticles, action.article]
  default:
    return savedArticles;
  }
}

// thunk creators
export const fetchSources = () => {
  return dispatch => {
    return axios.get('/api/articles')
      .then(res => res.data)
      .then(sources => dispatch(getAllSavedArticles(sources)))
      .catch(err => console.error('error fetching sources', err))
  }
}

export const postLineItem = article => dispatch => {
  axios.post(`/api/articles`, article)
  .then(newArticle => dispatch(addNewArticle(newArticle.data)))
  .catch(err => console.error('error creating a new line item', err))
}
