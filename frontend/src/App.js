import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import {Row,Col,Button,Modal} from 'antd'

import Events from './Components/Events'
import Auth from './Components/Auth'
import EventDetails from './Components/EventDetails'

 

class App extends Component {
 constructor()
 {
   super()
   this.state={
     events:[
      {
        name:'ABC',
        description:'Description for the event.....',
        date:'05-04-2019'
    
      },
      {
        name:'PQR',
        description:'Description for the event.....',
        date:'05-04-2019'
      },
      {
        name:'XYZ',
      description:'Description for the event.....',
      date:'05-04-2019'
      },
      {
        name:'UVW',
      description:'Description for the event.....',
      date:'05-04-2019'
      },
      {
        name:'ABC',
        description:'Description for the event.....',
        date:'05-04-2019'
    
      },
      {
        name:'PQR',
        description:'Description for the event.....',
        date:'05-04-2019'
      },
      {
        name:'XYZ',
      description:'Description for the event.....',
      date:'05-04-2019'
      },
      {
        name:'UVW',
      description:'Description for the event.....',
      date:'05-04-2019'
      }
      
    ]
  
  }
 }
 
  render() {
    return (
      <div>
        <div className='App-header' style={{borderRadius: 1}}>
        <header style={{marginTop: 20}}>
           <Row>
             <center>
             <Col span={6}><Button  type='primary'>Home</Button></Col>
             <Col span={6}><Button type='primary'>Events</Button></Col>
             <Col span={6}><Button type='primary'>About Us</Button></Col>
             <Col span={6}><Auth /></Col>

             </center>
           </Row>
        </header>
        </div>
        <div  className='App-body' style={{background:'linear-gradient(to right bottom, #369AB1, #65AF62)'}}>
             {/* <EventDetails title='Hackathon 2.0' society='CCS' /> */}
              
        </div>
      </div>
    );
  }
}

export default App;
