import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import {Row,Col,Button} from 'antd'
import ItemView from './Components/ItemView';



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
      }
    ]
   }
 }
  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/api/').then(
      res=>console.log(res.data)
    )
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
             <Col span={6}><Button type='primary' style={{backgroundColor: '#DB0000',borderWidth:'0'}}>Register</Button></Col>
             </center>
           </Row>
        </header>
        </div>
        <div  className='App-body' style={{background:'linear-gradient(to right bottom, #369AB1, #65AF62)'}}>
            <Row>
           {this.state.events.map(item=>(
            <Col span={8}> <ItemView name={item.name} desc={item.description} date={item.date} /></Col>

           ))}
            </Row>
        </div>
      </div>
    );
  }
}

export default App;
