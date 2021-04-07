export const RECIVED_USERS='RECIVED_USERS'
export const ADD_USER_ANSWER='ADD_USER_ANSWER'
export const ADD_USER_QUESTION='ADD_USER_QUESTION'

export function receiveUsers(users){

    return{
        type: RECIVED_USERS,
        users,
    }
}

export function addUserAnswer(authedUser,qid,answer){
    
    return{
        type: ADD_USER_ANSWER,
        qid,
        answer,
        authedUser,
       
    }
}
export function addUserQuestion(authedUser,qid){
    
    return{
        type: ADD_USER_QUESTION,
        qid,
        authedUser,
       
    }
}
export function handleAddUserQuestions (qid) {
   
    return (dispatch, getState) => {
      const { authedUser} = getState()
         dispatch(addUserQuestion(authedUser,qid))
      }
  }
export function handleAddUserAnswer (qid,answer) {
    return (dispatch, getState) => {
      const { authedUser} = getState()
         dispatch(addUserAnswer(authedUser,qid,answer))
      }
  }