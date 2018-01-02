import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({post}) => {
    const htmlString = {post}
    return (
      <div>
      <section className="content">
          <p dangerouslySetInnerHTML={{ __html: htmlString.post }} />
              <p align="center">
                  <Link to='/' className="btn">
                    Back
                </Link>
              </p>
        </section>
      </div>
    )
}

export default Content
