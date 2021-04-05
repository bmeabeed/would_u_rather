

export  const RECIVED_QUESTIONS='RECIVED_QUESTIONS'

export function receiveQuestions(questions){

    return{
        type: RECIVED_QUESTIONS,
        questions,
    }
}