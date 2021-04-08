import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProgressBar from './ProgressBar';


  
class VoteResult extends Component {
  

  render() {
   
    const { question,author } = this.props
   
    if (question == null || question === 'undefined') {
      
      return <p>This question doesn't existd</p>
    }

    const optionOneText=question.optionOne.text
    const optionTwoText=question.optionTwo.text
    const optionOneVotes=question.optionOne.votes.length
    const optionTwoVotes=question.optionTwo.votes.length
    const totalVotes=optionOneVotes+optionTwoVotes
    const optionOnePr=optionOneVotes/totalVotes *100
    const optionTwoPr=optionTwoVotes/totalVotes *100
    
    const myVote= question.optionOne.votes.includes(author.id)
    
    return (
        
      <div>
       
       <div className="container">
      <span className='qheader'>Asks by {author.name} </span>
      <div className='tweet'>
        <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar' />
        <div className='tweet-info'>
          <div >
          <h3 >Results:</h3>
         <div className="vote1">
            {myVote && (<span className="absolute">Your Vote</span>)} 
        Whould you rather than {optionOneText}?
         <ProgressBar key="{aaaa}" bgcolor="#6a1b9a" completed={optionOnePr} />
         {optionOneVotes} out of {totalVotes} votes
         </div>
          <hr/>
         <div>
         {(!myVote) && (<span className="absolute">Your Vote</span>)} 
        Whould you rather than {optionTwoText}?
         <ProgressBar key="{asaaa}" bgcolor="#6a1b9a" completed={optionTwoPr} />
        {optionTwoVotes} out of {totalVotes} votes
         </div>
          
           
            
            
           
          </div>
         
        </div>
      </div>
      </div>

        
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, props) {
  const { id } = props.match.params
  const question = questions[id]
  
  return {
    authedUser,
    question: question,
    author:(question!=null) ? users[question.author] : null,
    id,
   
  }
}



  
  
export default connect(mapStateToProps)(VoteResult)