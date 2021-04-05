import { Component } from "react";
import  {connect} from 'react-redux'

class User extends Component{

    render(){
        const user =this.props.user
      //  const questions =this.props.questions
       // console.log(questions)
        return(
            
          
                user.questions.map((uq) => 
                    (
                        
                        





                        
                        <div className="card">
                        <h2>{user.name} asks:</h2>
                        <div><img src="jeans3.jpg" alt="Denim Jeans" ></img></div>
                        
                        <div>  
                            <p>{uq}</p>
                        </div>
                       
                      </div> 

                       

                    )
                )


        )
    }
}

function mapStateToProps({users},{user}){
    console.log(users)
   // console.log(questions)
    return {
        user:user  ,
        //questions: questions,  
    }

}
export default connect(mapStateToProps)(User)