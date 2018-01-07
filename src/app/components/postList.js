import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PostComponent from '../components/postItem'
import moment from 'moment'

const PostList  = ({posts}) => (
  <ul className="postList">
    {posts.map((item, index) => (
      <PostComponent
        slug={item.slug}
        key={index}
        author={item.author}
        authorImage={item.authorImage}
        date={moment(item.created).format('MMM DD YYYY')}
        image={item.metadata.hero.url}
        title={item.title}
        />
    ))}
  </ul>
)


PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date),
      slug: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      authorImage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default PostList
