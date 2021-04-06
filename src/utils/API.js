import {
  
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion

} from './_DATA'



export function getInitalData()  {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
        
    ])

    .then(([users,questions]) => (
     
      {
      users: users,
      questions:  questions,
      }

    ))
}
 
export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}


