import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render() {
    return (
      <h1>This is Profile {this.props.profile.name}</h1>
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
