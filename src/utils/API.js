import {
  
  _getUsers,
  _getQuestions

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
 


