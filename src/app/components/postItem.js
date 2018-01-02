import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'


const Post = ({ completed, image, title, slug, author, date, authorImage}) => {
  return (
    <Link to={slug}>
      <div className="cardContainer" >
        <div className="card-image">
          <img src={image}></img>
        </div>
        <div className="card-desc">
          <p className="card-desc-head">
            {title}
          </p>
        </div>
        <div className="article">
          <div className="authorName">
            <img src={authorImage} />
            {author}
          </div>
            <p className="postDate">{date}</p>
        </div>
      </div>
    </Link>
  )
}

Post.propTypes ={
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired
}

export default Post
