import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import {Row,Col,Button,Modal,Spin} from 'antd'

import Events from './Components/Events'
import Auth from './Components/Auth'
import EventDetails from './Components/EventDetails'
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import EventsPage from './Pages/EventsPage';
import AboutPage from './Pages/AboutPage';
import SignUpPage from './Pages/SignUpPage';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage'
import firebase from 'firebase'
import Footer from './Components/Footer'
import CreateEventPage from './Pages/CreateEventPage';
import ProfilePage from './Pages/ProfilePage';
import OrgPage from './Pages/OrgPage';
import TransactionPage from './Pages/TransactionPage';

 

class App extends Component {
constructor()
{
  super()
  this.state={
    show:false,
    event:'loading',
    loading:true,
    userId:''
     
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

      this.setState({show:true,loading:false})
      const email_id=user.email
      const p=email_id.indexOf('r')
      const q=email_id.indexOf('@')
      const id=email_id.substr(p+1,q-p-1)
      this.setState({userId:id})
      firebase.database().ref(id).on('value',ss=>{
        let addr=ss.val().path
        axios.get(addr).then(res=>{
          let user_type=res.data.userType
          if(user_type=='u')
          {
            this.setState({event:'user'})
          }
          else
          {
            this.setState({event:'org'})
          }
        })
      })
      

     }
     else
     {
      this.setState({show:false,loading:false,event:''})
     }
   })
   
 }
signOut()
{
  // #369AB1, #65AF62
  firebase.auth().signOut()
}
  render() {
    return (
      <Router>
        <div>
        <div className='App-header' style={{borderRadius: 1}}>
        <header style={{marginTop: 6}}>
           {!this.state.show?
           <Row>
             <center>
             <Col span={6}><Link to='/'><Button  type='primary'>Home</Button></Link></Col>
             <Col span={6}><Link to='/events'><Button type='primary'>Events</Button></Link></Col>
             {

             }
             <Col span={6}><Link to='/about-us'><Button type='primary'>About Us</Button></Link></Col>
             <Col span={6}>
              {
                this.state.loading?
                <Spin />
                :
              <Auth />
              }

             </Col>

             </center>
           </Row>
           :
           <Row>
             <center>
           <Col span={5}><Link to='/'><Button  type='primary'>Home</Button></Link></Col>
             <Col span={5}><Link to='/events'><Button type='primary'>Events</Button></Link></Col>
             {
               this.state.event=='org'?
               <Col span={4}><Link to={`/org/${this.state.userId}`}><Button type='primary'>Profile</Button></Link></Col>
               :this.state.event=='user'?
               <Col span={4}><Link to={`/user/${this.state.userId}`}><Button type='primary'>Profile</Button></Link></Col>
               :this.state.event=='loading'?
               <Col span={4}><Spin size='small'/></Col>
               :
              <Col span={4} />
             }
             <Col span={5}><Link to='/about-us'><Button type='primary'>About Us</Button></Link></Col>
             <Col span={5}><Button type='primary' 
             style={{backgroundColor: '#DB0000',borderWidth:'0'}} 
             onClick={()=>{this.signOut()}}>Log Out</Button></Col>
             </center>
             </Row>
           }
        </header>
        </div>
        <div  className='App-body' style={{background:'linear-gradient(to right bottom, #EA3131, #F7AF62)'}}>
            <center>  <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/events' component={EventsPage} />
                <Route path='/about-us' component={AboutPage}/>
                <Route path='/create-event' component={CreateEventPage} />
                <Route  path='/events/:soc_id/:evt_name' component={EventDetails} />
                <Route path='/events/:id' component={ErrorPage} /> 
                <Route path='/user/:id' component={ProfilePage} />
                <Route path='/org/:id' component={OrgPage} />
                <Route path='/transaction/:id' component={TransactionPage} />
                <Route path='/auth' component={SignUpPage} />
                <Route path='/:id' component={ErrorPage} />
                
                
              </Switch></center>
              
        </div>
        <div>
          <Footer />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
