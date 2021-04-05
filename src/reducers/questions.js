
import {RECIVED_QUESTIONS} from '../actions/questions'

export default function questions(state=[],action){
   switch(action.type){
       case RECIVED_QUESTIONS:
          
           return{
               ...state,
               ...action.questions
           }
        default:
            return state
   }
}