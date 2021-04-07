import { Component } from "react";
import { logout } from "../actions/authedUser";
import { connect } from 'react-redux'
class Logout extends Component{
constructor(props){
    super(props)
    this.props.dispatch(logout())
    
}
render(){
    return (
       ""
    )
}
}


  
  export default connect()(Logout)