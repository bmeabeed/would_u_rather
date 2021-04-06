import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

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
    
    dispatch(handleAddQuestion(optionOne,optionTwo))

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
      <div>
        <h3 className='center'>Compose new Question</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          
          <input type="text"
            value={optionOne}
            onChange={this.handleChange1}
            className='textarea'
            placeholder="Enter first option"
          />
         <p></p>
          <input type="text"
            value={optionTwo}
            onChange={this.handleChange2}
            className='textarea'
            placeholder="Enter sconde option"
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
