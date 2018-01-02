import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlugPost } from '../actions/slug'
import Content from '../components/contentSlug'
import Header from '../components/headerSlug'
import moment from 'moment';

class Slug extends Component {
  componentDidMount(){
    this.props.fetchSlug('http://localhost:5000/api/posts/' + this.props.match.params.slug);
   }

  render(){
    return(
      <div>
        <Header
          title={this.props.slug.title}
          author={this.props.slug.author}
          authorImage={this.props.slug.author_image}
          date={moment(this.props.slug.created_at).format('MMM DD YYYY')}
          imageUrl={this.props.slug.image}
          />
        <Content
          post={this.props.slug.content}
          />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    slug: state.slug.slug
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSlug: (url) => dispatch(fetchSlugPost(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Slug)
