
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handelInitalData } from '../actions/shared'
import Dashboard from './Dashboard'
import Voit from './Vote'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import VoteResult from './VoteResult'
import ScoreBoard from './ScoreBoard'
import Logout from './Lougout'
import Login from './Login'

//Custom Route tag to limit access to authontecated user only
function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends Component {
  //Load InitalData from _DATA file
  componentDidMount() {
    this.props.dispatch(handelInitalData())
  }
  render() {
    //Check user loged in or not
    const authed= this.props.authedUser!==null ? true: false
  
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav authedUser={this.props.authedUser} />
             <div>
                  <Route path='/login' exact component={Login} />
                  <Route path='/' exact component={Dashboard} onEnter={this.checkLogedInUser}/>
                  <PrivateRoute authed={authed} path='/vote/:id' component={Voit} />
                  <PrivateRoute authed={authed} path='/new' component={NewQuestion} />
                  <Route path='/voteResult/:id' component={VoteResult} />
                  <Route path='/scoreBoard' component={ScoreBoard} />
                  <Route path='/logout' component={Logout}/>
                
               </div>
          </div>
        </Fragment>
      </Router>
      
   
    )
  }
}

function mapStateToProps ({ authedUser,users }) {
  return {
    loading: authedUser === null,
    authedUser : authedUser!=null ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(App)