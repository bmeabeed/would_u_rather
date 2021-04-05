
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handelInitalData } from '../actions/shared'
import Dashboard from './Dashboard'
import {Route} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handelInitalData())
  }
  render() {
    return (
      <div className="app">
      <Route exact path='/'>
           {this.props.loading === true
           ? null
            : <Dashboard />}
     </Route>
     <Route exact path='/voit'>
           <Dashboard />
     </Route>

     </div >
  
      
   
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)