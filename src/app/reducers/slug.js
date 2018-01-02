import {RECEIVE_SLUG, REQUEST_SLUG} from '../actions/slug'

const Slug = (state = {
  isFetching: false,
  slug: []
}, action) => {
  switch(action.type){
    case 'REQUEST_SLUG':
      return Object.assign({}, state, {
        isFetching: true,
      })
      case 'RECEIVE_SLUG':
        return Object.assign({}, state, {
          isFetching: false,
          slug: action.slug
        })
      default:
        return state
  }
}

export default Slug
