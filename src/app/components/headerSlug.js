import React from 'react'

const Header = ({title, author, date, authorImage, imageUrl}) => (
  <div className="header" style={{ backgroundImage: `url(${imageUrl})`}}>
      <div className="info">
        <h4><a> Cosmic JS </a></h4>
        <h1> {title} </h1>
        <div className="meta">
          <img className="author" src={authorImage}/><br/>
          By <a> {author} </a> on {date}
        </div>
      </div>
  </div>
)


export default Header
