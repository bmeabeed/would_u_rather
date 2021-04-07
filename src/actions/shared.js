import {getInitalData} from '../utils/API'
import {receiveQuestions} from './questions'
import {receiveUsers} from './users'
import { showLoading, hideLoading } from 'react-redux-loading'
export  function handelInitalData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitalData()
        .then(({users,questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}