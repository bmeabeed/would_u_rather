
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handelInitalData } from '../actions/shared'
import Dashboard from './Dashboard'
import Voit from './Vote'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
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

function PageNotFound () {
  return (
    <div id="main">
    	<div className="fof">
        		<h1> Error 404 (The Selected page not found) </h1>
    	</div>
</div>
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
             <Switch>
                  <Route  exact path='/login'  component={Login} />
                  <Route exact  path='/'  component={Dashboard} onEnter={this.checkLogedInUser}/>
                  <PrivateRoute exact authed={authed} path='/questions/:question_id' component={Voit} />
                  <PrivateRoute exact authed={authed} path='/add' component={NewQuestion} />
                  <Route path='/voteResult/:id' component={VoteResult} />
                  <Route exact path='/leaderboard' component={ScoreBoard} />
                  <Route exact path='/logout' component={Logout}/>
                  <Route exact path='/404' component={PageNotFound}/>
                  <Route  component={PageNotFound} />
              </Switch>
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