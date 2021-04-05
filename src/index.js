//import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import middleware from './middleware'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
const store=createStore(reducer,middleware)

ReactDOM.render(

  
    <Provider store={store}>
       <BrowserRouter>
           <App />
       </BrowserRouter>
   
    </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
