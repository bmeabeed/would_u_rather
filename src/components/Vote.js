import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { handleAddQuestionAnswer } from '../actions/questions'


  let answerValue=null;
class Vote extends Component {
  
state = { toHome: false,}
handelSubmitt=(e)=>{
  
    const { dispatch, id } = this.props
    
    if(answerValue!=null)
       {
        dispatch(handleAddQuestionAnswer(id,answerValue))
        this.setState({toHome: true })
       } 
        
    else
         alert("Plz select value")
    
    
}
  render() {
   
    const { toHome} = this.state
    if (toHome === true) {
      return <Redirect to='/voteResult' />
    }
    const { question,author } = this.props

    if (question === null) {
      return <p>This question doesn't existd</p>
    }



   
    return (
      <div>
       
       <div>
      <span className='qheader'>{author.name} asks:</span>
      <div className='tweet'>
        <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar' />
        <div className='tweet-info'>
          <div >
          <p >Would You Rather?</p>
          <p ><input type="radio" onClick={(e)=>answerValue=e.target.value}   value="optionOne" name="option" />{question.optionOne.text}</p> 
          <p ><input type="radio" onClick={(e)=>answerValue=e.target.value}  value="optionTwo" name="option" />{question.optionTwo.text}</p> 
           
            
            <button className="btn" onClick={this.handelSubmitt} >Submit</button> 
           
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
    author:users[question.author],
    id,
   
  }
}



  
  
export default connect(mapStateToProps)(Vote)