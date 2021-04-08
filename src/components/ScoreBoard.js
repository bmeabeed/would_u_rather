import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard'




  
class ScoreBoard extends Component {
  
  componentDidUpdate() {
    this.forceUpdate()
  }
  render() {
   const {users} = this.props
       
    return (
        <div>
       
       
            {this.props.uids.map((id)=>
                (
                    //(users[b].answers.length+ users[b].questions.length)
                  <div key={id}>
                       <ScoreCard  users={users} id={id}/>
                  </div>
                 
                   
                )
            )}

       
        </div>
     
    )
  }
}

function mapStateToProps ({users,questions}) {
    console.log(Object.keys(users))
  return {
    uids:Object.keys(users)
    .sort((a,b) => 
    (Object.keys(users[b].answers).length+ users[b].questions.length) 
    - (Object.keys(users[a].answers).length+ users[b].questions.length) 
    
    ),
    users:users,
    questions:questions
  }
}



  
  
export default connect(mapStateToProps)(ScoreBoard)