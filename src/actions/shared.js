import {getInitalData} from '../utils/API'
import {receiveQuestions} from './questions'
import {receiveUsers} from './users'
import {setAuthedUser} from './authedUser'

const AUTHED_ID = 'johndoe'
export  function handelInitalData(){
    return (dispatch) => {
        return getInitalData()
        .then(({users,questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}