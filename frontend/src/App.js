import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import {Row,Col,Button,Modal} from 'antd'

import Events from './Components/Events'
import Auth from './Components/Auth'
import EventDetails from './Components/EventDetails'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import EventsPage from './Pages/EventsPage';
import AboutPage from './Pages/AboutPage';
import AuthPage from './Pages/AuthPage';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage'
import firebase from 'firebase'

 

class App extends Component {

componentWillMount()
{
  const config = {
    apiKey: "AIzaSyAB0AqtmtFqK59GyInDUoWMkdpMQdala7Q",
    authDomain: "dbmsproject-ef108.firebaseapp.com",
    databaseURL: "https://dbmsproject-ef108.firebaseio.com",
    projectId: "dbmsproject-ef108",
    storageBucket: "dbmsproject-ef108.appspot.com",
    messagingSenderId: "505175132080"
  };
  firebase.initializeApp(config);

}
 

  render() {
    return (
      <Router>
        <div>
        <div className='App-header' style={{borderRadius: 1}}>
        <header style={{marginTop: 20}}>
           <Row>
             <center>
             <Col span={6}><Link to='/'><Button  type='primary'>Home</Button></Link></Col>
             <Col span={6}><Link to='/events'><Button type='primary'>Events</Button></Link></Col>
             <Col span={6}><Link to='/about-us'><Button type='primary'>About Us</Button></Link></Col>
             <Col span={6}><Auth /></Col>

             </center>
           </Row>
        </header>
        </div>
        <div  className='App-body' style={{background:'linear-gradient(to right bottom, #369AB1, #65AF62)'}}>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/events' component={EventsPage} />
                <Route path='/about-us' component={AboutPage}/>
                <Route  path='/events/:soc_id/:evt_name' component={EventDetails} />
                <Route path='/events/:id' component={ErrorPage} /> 
                <Route path='/auth' component={AuthPage} />
                <Route path='/:id' component={ErrorPage} />
              </Switch>
              
        </div>
        <div>
          <h1>FOOTER</h1>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
