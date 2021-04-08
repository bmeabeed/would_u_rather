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
                <Tab>Unanswered Questions</Tab>
                <Tab>Answerd Questions</Tab>
              </TabList>
              <TabPanel>
                <div>
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
    //Get questions id array for answered question
    const  qaid= aq.filter(([key, value]) => value.optionOne.votes.includes(authedUser) ||  value.optionTwo.votes.includes(authedUser))
    //Get questions id array for Unanswered question
    const  quid= aq.filter(([key, value]) => (!value.optionOne.votes.includes(authedUser) && !value.optionTwo.votes.includes(authedUser)))
 return {
    authedUser,
    aid : Object.keys(Object.fromEntries(qaid)),
    uid: Object.keys(Object.fromEntries(quid)),
  }
}
export default connect(mapStateToProps)(Dashboard)