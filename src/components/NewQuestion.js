import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import { handleAddUserQuestions } from '../actions/users'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }
  handleChange1 = (e) => {
    const optionOne = e.target.value

    this.setState(() => ({
        optionOne
        
    }))
  }
  handleChange2 = (e) => {
    const optionTwo = e.target.value

    this.setState(() => ({
       
        optionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne,optionTwo } = this.state
    const { dispatch} = this.props
    
    dispatch(handleAddQuestion(optionOne,optionTwo)).then((q)=>{
      dispatch(handleAddUserQuestions(q.question.id))

    }

   
    )
   
    this.setState(() => ({
        optionOne: '',
        optionTwo: '',
        toHome: true
    }))
  }
  render() {
    const { optionOne,optionTwo, toHome } = this.state
    
    if (toHome === true) {
      return <Redirect to='/' />
    }

   

    return (
      <div className="container">
        <h3 >Create new Question</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          
          <input type="text"
            value={optionOne}
            onChange={this.handleChange1}
            className='textarea'
            placeholder="Enter option one text here"
          />
         <p className="OR">OR</p>
          <input type="text"
            value={optionTwo}
            onChange={this.handleChange2}
            className='textarea'
            placeholder="Enter option two text here"
          />
          
         
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
