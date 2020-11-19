import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
export default class App extends Component {

  render() {
    const { component: Component, ...rest } = this.props
    const logged = true
console.log('######@', this.props)
    return (
      <Route {...rest} render={props => {
       //   if (pending) return <div>Loading...</div>
          return logged ? <Component {...props} /> : <Redirect to="/login" />
        }} 
      />
    )
  }

}
