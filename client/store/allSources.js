import axios from 'axios';

// action types
const GET_ALL_SOURCES = 'GET_ALL_SOURCES';

// action creators
const getAllSources = sources => ({
  type: GET_ALL_SOURCES,
  sources
  });

// reducer
export default (sources = [], action) => {
  switch (action.type) {
    case GET_ALL_SOURCES:
      return action.sources;

  default:
    return sources;
  }
};

// thunk creators
export const fetchSources = () => {
  return dispatch => {
    return axios.get('/api/sources')
      .then(res => res.data)
      .then(sources => dispatch(getAllSources(sources.sources)))
      .catch(err => console.error('error fetching sources', err))
  }
};
