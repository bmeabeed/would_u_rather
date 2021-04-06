
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handelInitalData } from '../actions/shared'
import Dashboard from './Dashboard'
import Voit from './Vote'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import VoteResult from './VoteResult'
import ScoreBoard from './ScoreBoard'


class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handelInitalData())
  }
  render() {
   
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/vote/:id' component={Voit} />
                  <Route path='/new' component={NewQuestion} />
                  <Route path='/voteResult/:id' component={VoteResult} />
                  <Route path='/scoreBoard' component={ScoreBoard} />
                </div>}
          </div>
        </Fragment>
      </Router>
      
   
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)