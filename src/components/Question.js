import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class Question extends Component {

  
  
  render() {
   
    const { question,author } = this.props
    
    

    if (question === null) {
      return <p>This question doesn't existd</p>
    }


   
    const { optionOne} = question
   
    return (
      
     <div>
      <span className='qheader'>{author.name} asks:</span>
      <div className='tweet'>
        <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar' />
        <div className='tweet-info'>
          <div>
          <p >Would You Rather?</p>
            <p>{optionOne.text}</p>
            <Link to={`${this.props.link+"/"+this.props.id}`} >
            <button className="btn">View Vote</button> 
            </Link>
          </div>
         
        </div>
      </div>
      </div>


    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question: question,
    author:users[question.author],
    
    
  }
}
export default connect(mapStateToProps)(Question)