
import {RECIVED_USERS,ADD_USER_ANSWER,ADD_USER_QUESTION} from '../actions/users'

export default function users(state ={},action){
    const { authedUser,qid } = action
   switch(action.type){
   
       case RECIVED_USERS:
           return{
               ...state,
               ...action.users
           }
        case ADD_USER_ANSWER :
            const { answer } = action
            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  answers:  {...state[authedUser].answers,[qid]:answer}
                }
            }
        case ADD_USER_QUESTION :
            
                  return {
                    ...state,
                    [authedUser]: {
                      ...state[action.authedUser],
                      questions: state[authedUser].questions.concat(qid)
                    }
                }
        default:
            return state
   }
}