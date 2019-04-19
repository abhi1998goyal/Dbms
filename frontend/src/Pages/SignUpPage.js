import React, { Component } from 'react';
import {Form,Button,Input,Card,Row,Col} from 'antd'
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import axios from 'axios'

class AuthPage extends Component {
    
    constructor()
    {
        super()
        this.state={
            username:'',
            roll_no:null,
            
            phoneNo:null,

        }
    }
    onSignUp(username,roll_no,password,phone_no)
    {
    firebase.auth().createUserWithEmailAndPassword("thapar"+roll_no+"@gmail.com",password)
    .then(()=>{
        console.log("Logged in")
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/Student/',
            data: {
            roll_no:roll_no,
            name: username,
            email_id: "thapar"+roll_no+"@gmail.com",
            phone_no:phone_no
              
            } 
          }).catch(error => {
                console.log(error)
          }).then(response => {
              console.log(response)
          });
          firebase.database().ref('Students').child(roll_no)
          firebase.database().ref(`Students/${roll_no}`).child('path').set(`http://localhost:8000/api/Student/${roll_no}`)
        this.setState({visible:false})
    })
    .catch((err)=>{console.log(err)})
    
}
    render() {
        return (
            <div style={{minHeight:'100vh'}}>
              <center>
                    <Form style={{width: 300,paddingTop:150}}>
                    <Row>
                        <Col span={6} style={{textAlign: 'justify'}}>Username</Col>
                        <Col span={20} >
                        <Form.Item>
                            <Input placeholder='Enter Username'
                             value={this.state.username} 
                             onChange={(text)=>{this.setState({username:text.target.value})}}/>
                        </Form.Item></Col>
                    </Row>
                    <Row>
                        <Col span={6} style={{textAlign: 'justify'}}>Roll No</Col>
                        <Col span={20}>
                        <Form.Item>
                            <Input placeholder='Enter Thapar Roll No.' 
                            value={this.state.roll_no} 
                             onChange={(text)=>{this.setState({roll_no:text.target.value})}} />
                        </Form.Item></Col>
                    </Row>
                    
                    <Row>
                        <Col span={6} style={{textAlign: 'justify'}}>Phone No.</Col>
                        <Col span={20}>
                        <Form.Item>
                            <Input placeholder='Enter Phone No.' 
                            value={this.state.phoneNo} 
                            onChange={(text)=>{this.setState({phoneNo:text.target.value})}}/>
                        </Form.Item></Col>
                    </Row>
                       
                        <Row > 
                        <Col span={20}>
                        <Form.Item >
                            <Button type='danger' onClick={()=>{this.onSignUp(
                                this.state.username,
                                this.state.roll_no,
                                this.state.roll_no,
                                this.state.phoneNo
                            )}}>
                                Sign Up
                            </Button>
                        </Form.Item>
                        </Col>
                        </Row>
                    </Form>
                </center>  
            </div>
        );
    }
}

export default AuthPage;