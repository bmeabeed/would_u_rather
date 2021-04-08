import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { handleAddQuestionAnswer } from '../actions/questions'
import { handleAddUserAnswer } from '../actions/users'


  let answerValue=null;
class Vote extends Component {
  
state = { toHome: false,}
handleSubmit=(e)=>{
  
  const { dispatch, id } = this.props
    
    if(answerValue!=null)
       {
        dispatch(handleAddQuestionAnswer(id,answerValue))
        dispatch(handleAddUserAnswer(id,answerValue))
        this.setState({toHome: true })
       } 
        
    else
         alert("Plz select value")
    
    
}
  render() {
   
    const { toHome} = this.state
    if (toHome === true) {
      return <Redirect to={'/voteResult/'+this.props.id} />
    }
    const { question,author } = this.props

    if (question == null || question === 'undefined') {
      return <p>This question doesn't existd</p>
    }

    return (
      <div>
       
       <div className="container">
      <span className='qheader'>{author.name} asks:</span>
      <div className='tweet'>
        <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar' />
        <div className='tweet-info'>
          <div >
          <p >Would You Rather?</p>
          <p ><input type="radio" onClick={(e)=>answerValue=e.target.value}   value="optionOne" name="option" />{question.optionOne.text}</p> 
          <p ><input type="radio" onClick={(e)=>answerValue=e.target.value}  value="optionTwo" name="option" />{question.optionTwo.text}</p> 
           
            
            <button className="btn" onClick={this.handleSubmit} >Submit</button> 
           
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

export default connect(mapStateToProps)(Vote)