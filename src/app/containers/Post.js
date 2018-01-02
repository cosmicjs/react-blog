import React, { Component } from 'react'
import PostList from '../components/postList'
import { connect } from 'react-redux'
import { togglePost, fetchBlogPosts } from '../actions'
import { fetchSlugPost } from '../actions/slug'
import PropTypes from 'prop-types'
import logo from '../logo.svg'
import '../scss/index.scss'

class Post extends Component {

  componentDidMount(){
    this.props.fetchData('http://localhost:5000/api/posts')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CosmicJS</h1>
        </header>
          <PostList
            posts={this.props.data}
            />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchBlogPosts(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)
