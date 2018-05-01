import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import sources from './allSources'
import singleSourceArticles from './singleSourceArticles'
import savedArticles from './savedArticles'

const reducer = combineReducers({user, sources, singleSourceArticles, savedArticles})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './allSources'
export * from './singleSourceArticles'
export * from './savedArticles'
