import React from 'react'
import {Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import Post from './containers/Post'
import Slug from './containers/Slug'


const RouteList = () => (
  <div>
    <main>
      <BrowserRouter>
        <Routes>  
          <Route exact path="/" element={<Post />} />
          <Route exact path="/:slug" element={<Slug />} />
          </Routes>
        </BrowserRouter>
    </main>
  </div>
)

export default RouteList
