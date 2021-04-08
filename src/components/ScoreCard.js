const ScoreCard = (props) => {
    const { users, id } = props;
    const user=users[id]

   
    return (
     
     <div className="tweet">
         <img  src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
                      
            <div>
                <h2> {user.name}</h2>
                <p>Answerd Question: {Object.keys(user.answers).length}</p>
                <p>Created Question: {user.questions.length}</p>
            </div>
            <div className='avatar'>
          <span className="qheader">Score:</span>
          <p>{(Object.keys(user.answers).length+ user.questions.length)}</p>

        </div>
                       
      </div>
   
   );
  };
  
  export default ScoreCard;