import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProgressBar from './ProgressBar';


  
class ScoreBoard extends Component {
  

  render() {
   const {users} = this.props
       
    return (
        <div>
        <ul>
        <li key="ssssss">cccc</li>
            {this.props.uids.map((id)=>
                (
                    //(users[b].answers.length+ users[b].questions.length)

                    <li key={id}>
                        <div>
                        {users[id].name}
                            <p>Answerd Question: {Object.keys(users[id].answers).length}</p>
                            <p>Created Question: {users[id].questions.length}</p>
                            <p>Score: {(Object.keys(users[id].answers).length+ users[id].questions.length)}</p>


                        </div>
                        
                        </li>
                )
            )}

        </ul>
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