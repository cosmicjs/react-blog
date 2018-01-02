import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import slug from './slug'

const cosmicBlog = combineReducers({
  posts,
  slug,
  router: routerReducer
})

export default cosmicBlog
