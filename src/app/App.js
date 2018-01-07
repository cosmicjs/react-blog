import React from 'react'
import { Route, Link } from 'react-router-dom'
import Post from './containers/Post'
import Slug from './containers/Slug'


const Routes = () => (
  <div>
    <main>
      <Route exact path="/" component={Post} />
      <Route exact path="/:slug" component={Slug} />
    </main>
  </div>
)

export default Routes
