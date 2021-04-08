import { Component } from "react";
import '../styles/login.css'
import { connect } from 'react-redux'
import Select from "react-select";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router";

class Login extends Component{
state={
   
    selectedUser: null
   }

//To handel the selected user from list
handleChange =(selectedOption)=>{
   const selectedUser=selectedOption.value
    this.setState({
        selectedUser : selectedUser
    })
}


handleSubmits =(e)=>{
    e.preventDefault()
    const { dispatch } = this.props
    const {selectedUser} = this.state
      if(selectedUser!=null)
       {
        //Update AuthedUser in stae object
        dispatch(setAuthedUser(selectedUser))
       } 
        
    else
         alert("Please select User")
 }
    render(){
const {users,uids} =this.props
        return(
            this.props.loading === true
                ? 
            <div >
                <hr></hr>
                <div className="login">
                   <div className="loginTitle">
                     <span>Welcome to Would You Rather App!</span>
                     <p>Please sign in to continue</p>
                </div>
                <div className="react"></div>
                <div className="sign">Sign in</div>
                <div>
                    <Select
                    onChange={this.handleChange}
                    options={uids.map( uid =>{
                        return {value: users[uid].id ,label: 
                            <span><img className="naveLoged" src={users[uid].avatarURL} alt={users[uid].name}/> {users[uid].name}</span>, flag:users[uid].avatar}
                    } )} />
                 
                </div>
                <button className="btn" onClick={this.handleSubmits} >Sign in</button> 
                </div>

            </div>
            :
           <Redirect to="/"/>
        )    
    }
}

function mapStateToProps ({users,authedUser}) {
    console.log(users)
return {
     loading: authedUser === null,
     uids : Object.keys(users),
     users: users,
     authedUser:authedUser,
  }
}
export default connect(mapStateToProps)(Login)