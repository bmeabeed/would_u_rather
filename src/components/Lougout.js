import { Component } from "react";
import { logout } from "../actions/authedUser";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
class Logout extends Component{
constructor(props){
    super(props)
    this.props.dispatch(logout())
    
}
render(){
    return (
       <Redirect to="/login" />
    )
}
}

  export default connect()(Logout)