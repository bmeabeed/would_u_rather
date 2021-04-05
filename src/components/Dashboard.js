import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
  render() {
    return (
        <div className='center container'>
            <Tabs>
        <TabList>
          <Tab>Unanswered question</Tab>
          <Tab>Answerd question</Tab>
        </TabList>
    
        <TabPanel>
        <div>
        <h3 className='center'>Unanswered question</h3>
        <ul className='dashboard-list'>
          {this.props.aid.map((id) => (
            <li key={id}>
              <Question id={id} link={"/voit"}/>
            </li>
          ))}
        </ul>
      </div>
    </TabPanel>
    <TabPanel>
    <div>
        <h3 className='center'>Answerd question</h3>
        <ul className='dashboard-list'>
          {this.props.qIds.map((id) => (
            <li key={id}>
              <Question id={id}  link={"/voitResult"}/>
            </li>
          ))}
        </ul>
      </div>
    </TabPanel>
  </Tabs>
     </div>


     
    )
  } 
}

function mapStateToProps ({authedUser,questions }) {
    const aq = Object.entries(questions);
    const  qaid= aq.filter(([key, value]) => value.optionOne.votes.includes(authedUser) ||  value.optionTwo.votes.includes(authedUser))
    const  quid= aq.filter(([key, value]) => (!value.optionOne.votes.includes(authedUser) && !value.optionTwo.votes.includes(authedUser)))

    console.log("------------>"+authedUser)
    
  return {
    authedUser,
    aid : Object.keys(Object.fromEntries(qaid)),
    qIds: Object.keys(Object.fromEntries(quid)),
    
     // .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)