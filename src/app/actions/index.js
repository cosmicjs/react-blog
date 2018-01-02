//import fetch from 'cross-fetch';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';

function requestPosts(posts){
  return {
    type: 'REQUEST_POSTS',
    posts
  }
}


function receivePosts(json){
  return {
    type: 'RECEIVE_POSTS',
    posts: json.map(data => {
      data.author = data.metadata.author.title;
      data.authorImage = data.metadata.author.metadata.image.url;
      return data
    }),
    receivedAt: Date.now()
  }
}


export function postsHasErrored(bool){
  return {
    type: 'POSTS_HAS_ERRORED',
    hasErrored: bool
  }
}


export function fetchBlogPosts(url) {
  return (dispatch) => {
    dispatch(requestPosts(url))
    fetch(url)
    .then( response => response.json(),
      error => {
        console.log('An error occurred.', error)
        dispatch(postsHasErrored(error))
      }
    )
    .then(json => {
      console.log(json);
      dispatch(receivePosts(json))
    }
  )
};
}
