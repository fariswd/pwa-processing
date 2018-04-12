import React from 'react'
import { connect } from 'react-redux'

import { getImages } from '../action/ImageActions'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    this.props.getImages()
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
  console.log(state)
  return {
    images: state.image.processing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImages: () => dispatch(getImages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
