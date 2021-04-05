export const RECIVED_USERS='RECIVED_USERS'

export function receiveUsers(users){

    return{
        type: RECIVED_USERS,
        users,
    }
}