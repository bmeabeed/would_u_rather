
export const SET_AUTHED_USER ='SET_AUTHED_USER'
export const LOGOUT='LOGOUT'

export function setAuthedUser(id){

    return{
        type:SET_AUTHED_USER,
        id:id,

    }
    
}
export function logout(){

    return{
        type: LOGOUT,
        
    }
}



  
  /*export function handleAddQuestionAnswer (qid,answer) {
    return (dispatch, getState) => {
       
        return (()=> dispatch(addQuestionAnswer(authedUser,qid,answer)))
      }
  }*/