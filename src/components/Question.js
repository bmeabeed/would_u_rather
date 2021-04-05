import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link,Route} from 'react-router-dom'
//import { formatQuestion} from '../utils/_DATA'

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
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
          <p >Would You Rather?</p>
            <p>{optionOne.text}</p>
            <Link to = {this.props.link} ><button className="btn">Aview poll</button> </Link>
          
          </div>
         
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
 //({ optionOneText, optionTwoText, author }) {
  return {
    authedUser,
    question: question,
    author:users[question.author]
    //  ? formatQuestion(question.optionOne.text,question.optionTwo.text, users[question.author])
   //   : null
  }
}

export default connect(mapStateToProps)(Question)