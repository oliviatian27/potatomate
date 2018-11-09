import React from 'react'
import {connect} from 'react-redux'
import {fetchCurrentUser} from 'actions/action'

const withOutAuth=(component)=>{
  class WithOutAuthComponent {

    componentDidMount(){
      if (localStorage.getItem('jwt')&&!this.props.loggedIn) {
        this.props.fetchCurrentUser()
      }
    }

    render(){
      return <Component />
    }
  }

  return connect(({user:{user:{loggedIn}}})=>({loggedIn}),{fetchCurrentUser})(WithOutAuthComponent)
}

export default withOutAuth
