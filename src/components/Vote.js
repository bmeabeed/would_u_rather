import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { handleAddQuestionAnswer } from '../actions/questions'


  let answerValue=null;
class Vote extends Component {
   
handelSubmitt=(e)=>{
    //const { authedUser,id } = this.
    const { dispatch, id } = this.props
    if(answerValue!=null)
        dispatch(handleAddQuestionAnswer(id,answerValue))
        .then(
         // window.location.href="/"
        )
    else
         alert("Plz select value")
    
    
}
  render() {
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
           <Link to="/">sssssssssss</Link>
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