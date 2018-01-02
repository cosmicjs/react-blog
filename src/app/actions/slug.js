export const RECEIVE_SLUG = 'RECEIVE_SLUG'
export const REQUEST_SLUG = 'REQUEST_SLUG'


function requestSlug(slug){
  return {
    type: 'REQUEST_SLUG',
    slug
  }
}

function receiveSlug(json){
  const slug = {
    'author': json.metadata.author.title,
    'author_image': json.metadata.author.metadata.image.url,
    'image': json.metadata.hero.url
  }
  return {
    type: 'RECEIVE_SLUG',
    slug: Object.assign(slug, json),
    receivedAt: Date.now()
  }
}


function slugHasErrored(bool){
  return {
    type: 'SLUG_HAS_ERRORED',
    hasErrored: bool
  }
}

export function fetchSlugPost(url) {
  return (dispatch) => {
    dispatch(requestSlug(url))
    fetch(url)
    .then( response => response.json(),
      error => {
        console.log('An error occurred.', error)
        dispatch(slugHasErrored(error))
      }
    )
    .then(json => {
      dispatch(receiveSlug(json))
    }
  )
};
}
