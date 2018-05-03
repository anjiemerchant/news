import axios from 'axios';

// action types
const GET_SOURCE_ARTICLES = 'GET_SOURCE_ARTICLES';

// action creators
const getSourceArticles = articles => ({
  type: GET_SOURCE_ARTICLES,
  articles
});

// reducer
export default (singleSourceArticles = [], action) => {
  switch (action.type) {
    case GET_SOURCE_ARTICLES:
      return action.articles;

  default:
    return singleSourceArticles;
  }
}

// thunk creators
export const fetchSingleSourceArticles = id => {
  return dispatch => {
    return axios.get(`/api/sources/${id}`)
      .then(res => res.data)
      .then(articles => dispatch(getSourceArticles(articles.articles)))
      .catch(err => console.error('error fetching articles', err))
  }
};
