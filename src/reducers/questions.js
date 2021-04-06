
import {RECIVED_QUESTIONS,
    ADD_QUESTION_ANSWER,
    ADD_QUESTION
} from '../actions/questions'

export default function questions(state=[],action){
   switch(action.type){
       case RECIVED_QUESTIONS:
            return{
               ...state,
               ...action.questions
           }
           case ADD_QUESTION_ANSWER :
            const { authedUser,qid,answer } = action

           
            state[qid][answer].votes=state[qid][answer].votes.concat(authedUser)
           
            return {
                ...state,
                [qid]: {
                  ...state[qid],
                  votes:  state[qid][answer].votes.concat(authedUser)
                }
            }

            case ADD_QUESTION:
                return{
                   ...state,
                   [action.question.id]: action.question,
               }  
            
      
        default:
            return state
   }
}