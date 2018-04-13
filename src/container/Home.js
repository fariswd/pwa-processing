import React from 'react'
import { connect } from 'react-redux'

import { getImages } from '../action/ImageActions'

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.init) {
      this.props.getImages(1)
      this.props.initChange()
    }
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY > document.body.offsetHeight - 200) && !this.props.loading) {
      this.props.getImages(+this.props.page + 1)
    }
  }

  render() {
    const { images } = this.props
    return (
      <div>
        {images && images.map((image, i) => {
          return (
            <a key={image.twitterId} href={`http://twitter.com/${image.name}/status/${image.twitterId}`}>
              <img src={image.img} alt={image.name}/>
            </a>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.image.processing,
    page: state.image.page,
    loading: state.image.loading,
    init: state.image.init,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImages: (page) => dispatch(getImages(page)),
    initChange: () => dispatch({type: 'SET_INIT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
