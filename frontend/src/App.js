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
import SignUpPage from './Pages/SignUpPage';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage'
import firebase from 'firebase'

 

class App extends Component {
constructor()
{
  super()
  this.state={
    show:true
  }
}
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
 componentDidMount()
 {
   firebase.auth().onAuthStateChanged((user)=>{
     if(user)
     {
      this.setState({show:false})
     }
     else
     {
      this.setState({show:true})
     }
   })
 }
signOut()
{
  firebase.auth().signOut()
}
  render() {
    return (
      <Router>
        <div>
        <div className='App-header' style={{borderRadius: 1}}>
        <header style={{marginTop: 20}}>
           {this.state.show?
           <Row>
             <center>
             <Col span={6}><Link to='/'><Button  type='primary'>Home</Button></Link></Col>
             <Col span={6}><Link to='/events'><Button type='primary'>Events</Button></Link></Col>
             <Col span={6}><Link to='/about-us'><Button type='primary'>About Us</Button></Link></Col>
             <Col span={6}><Auth /></Col>

             </center>
           </Row>
           :
           <Row>
             <center>
           <Col span={6}><Link to='/'><Button  type='primary'>Home</Button></Link></Col>
             <Col span={6}><Link to='/events'><Button type='primary'>Events</Button></Link></Col>
             <Col span={6}><Link to='/about-us'><Button type='primary'>About Us</Button></Link></Col>
             <Col span={6}><Button type='primary' 
             style={{backgroundColor: '#DB0000',borderWidth:'0'}} 
             onClick={()=>{this.signOut()}}>Log Out</Button></Col>
             </center>
             </Row>
           }
        </header>
        </div>
        <div  className='App-body' style={{background:'linear-gradient(to right bottom, #369AB1, #65AF62)'}}>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/events' component={EventsPage} />
                <Route path='/about-us' component={AboutPage}/>
                <Route  path='/events/:soc_id/:evt_name' component={EventDetails} />
                <Route path='/events/:id' component={ErrorPage} /> 
                <Route path='/auth' component={SignUpPage} />
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
