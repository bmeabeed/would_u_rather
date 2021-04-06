

import {  formatQuestion } from '../utils/helper'
import {  saveQuestionAnswer,saveQuestion } from '../utils/API'



export  const RECIVED_QUESTIONS='RECIVED_QUESTIONS'
export  const ADD_QUESTION_ANSWER='ADD_QUESTION_ANSWER'
export  const ADD_QUESTION='ADD_QUESTION'

export function receiveQuestions(questions){

    return{
        type: RECIVED_QUESTIONS,
        questions,
    }
}
export function addQuestion(question){

  return{
      type: ADD_QUESTION,
      question,
  }
}

export function addQuestionAnswer(authedUser,qid,answer){
    
    return{
        type: ADD_QUESTION_ANSWER,
        qid,
        answer,
        authedUser,
    }
}



  export function handleAddQuestion (optionOne,optionTwo) {
    return (dispatch, getState) => {
      const { authedUser,users} = getState()
      
     const q={
        optionOneText: optionOne,
        optionTwoText:optionTwo,
        author :authedUser
      }
     return saveQuestion(q)
        .then((q)=> dispatch(addQuestion(q)))
        
    }
  }

  export function handleAddQuestionAnswer (qid,answer) {
    return (dispatch, getState) => {
      const { authedUser} = getState()
       return saveQuestionAnswer({
        authedUser: authedUser,
        qid:qid,
        answer:answer,
        
      })
        .then(()=> dispatch(addQuestionAnswer(authedUser,qid,answer)))
      }
  }
  