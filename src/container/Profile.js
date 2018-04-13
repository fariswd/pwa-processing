import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render() {
    return (
      <div className='center-aligner' >
        <a href={this.props.profile.name}>{this.props.profile.name}</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
