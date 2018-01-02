import {RECEIVE_POSTS, REQUEST_POSTS} from '../actions'

const posts = (state = {
  isFetching: false,
  posts: []
}, action) => {
  switch(action.type){
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      })
      case 'RECEIVE_POSTS':
        return Object.assign({}, state, {
          isFetching: false,
          posts: action.posts
        })
      default:
        return state
  }
}

export default posts
