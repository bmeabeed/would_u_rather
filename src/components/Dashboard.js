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
                  {this.props.uid.map((id) => (
                    <li key={id}>
                      <Question id={id} link={"/vote"}/>
                    </li>
                  ))}
                </ul>
              </div>
          </TabPanel>
          <TabPanel>
            <div>
                <h3 className='center'>Answerd question</h3>
                <ul className='dashboard-list'>
                  {this.props.aid.map((id) => (
                    <li key={id}>
                      <Question id={id}  link={"/voteResult"}/>
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
 return {
    authedUser,
    aid : Object.keys(Object.fromEntries(qaid)),
    uid: Object.keys(Object.fromEntries(quid)),
  }
}
export default connect(mapStateToProps)(Dashboard)