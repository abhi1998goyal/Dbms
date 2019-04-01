import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import {Row,Col,Button} from 'antd'

class App extends Component {
  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/api/').then(
      res=>console.log(res.data)
    )
  }
  render() {
    return (
      <div>
        <div className='App-header' style={{background: 'linear-gradient(to right bottom, #369AB1, #65AF62)',borderRadius: 1}}>
        <header style={{marginTop: 20}}>
           <Row>
             <center>
             <Col span={6}><Button  type='primary' >Home</Button></Col>
             <Col span={6}><Button type='primary'>Events</Button></Col>
             <Col span={6}><Button type='primary'>Register</Button></Col>
             <Col span={6}><Button type='primary'>About Us</Button></Col>
             </center>
           </Row>
        </header>
        </div>
        <div className='App-body'>

        </div>
      </div>
    );
  }
}

export default App;
