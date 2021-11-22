import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import posts from './posts'
import slug from './slug'

const cosmicBlog = (history) => combineReducers({
  posts,
  slug,
  router: connectRouter(history),
})

export default cosmicBlog
