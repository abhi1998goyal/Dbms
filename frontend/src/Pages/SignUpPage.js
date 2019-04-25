import React, { Component } from 'react';
import {Form,Button,Input,Card,Row,Col,Radio} from 'antd'
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import axios from 'axios'
import RadioGroup from 'antd/lib/radio/group';
import { Dropdown } from 'semantic-ui-react'


const choices=[
    {
        "key": "TNT",
      "text": "Thapar Nautanki Club",
      "value": "TNT"
    },
    {
        "key": "CCS",
        "text": "Creative Computing Society",
        "value": "CCS"
    },
    {
        "key": "SCIM",
        "text": "Scimatics",
        "value": "SCIM"
    }
   
]

class AuthPage extends Component {
    
    constructor()
    {
        super()
        this.state={
            username:'',
            roll_no:null,
            user_type:-1,
            phoneNo:null,
            soc_choice:''

        }
    }

    onSelect(e)
    {
        
        this.setState({
            user_type:e.target.value
        })
    }
    handleChange=(e, { value })=>
    {
        console.log(value)
        this.setState({
            soc_choice:value
        })
    }
    

    onSignUp(username,roll_no,password,phone_no,user_type,soc_choice)
    {
    if(this.state.user_type==0)
    {
            firebase.auth().createUserWithEmailAndPassword("thapar"+roll_no+"@gmail.com",password)
        .then(()=>{
            console.log("Logged in")
            axios({
                method: 'post',
                url: 'http://localhost:8000/api/Student/',
                data: {
                roll_no:roll_no,
                user_type:'u',
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
    else if(this.state.user_type==1)
    {
        firebase.auth().createUserWithEmailAndPassword("thapar"+roll_no+"@gmail.com",password)
        .then(()=>{
            console.log("Logged in")
            axios({
                method: 'post',
                url: 'http://localhost:8000/api/Organizer/',
                data: {
                ident_no:roll_no,
                name: username,
                user_type:'o',
                email_id: "thapar"+roll_no+"@gmail.com",
                phone_no:phone_no,
                society:this.state.soc_choice
                
                } 
            }).catch(error => {
                    console.log(error)
            }).then(response => {
                console.log(response)
            });
            firebase.database().ref('Organizers').child(roll_no)
            firebase.database().ref(`Organizers/${roll_no}`).child('path').set(`http://localhost:8000/api/Organizer/${roll_no}`)
            this.setState({visible:false})
        })
        .catch((err)=>{console.log(err)})
    }
    
}

    render() {
         
        return (
            <div style={{minHeight:'100vh'}}>
        
              <center>
             
                    <Form style={{width: 300,paddingTop:150}}>
                    <Row>
                           <Col span={22}>
                           <RadioGroup onChange={(e)=>{this.onSelect(e)}} value={this.state.user_type}>
                            <Radio value={0}>Student</Radio>
                            <Radio value={1}>Organizer</Radio>
                           </RadioGroup>
                           </Col>
                       </Row><br/>
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
                       <Row>
                            
                           <Col span={20}>
                           {
                           this.state.user_type==0 || this.state.user_type==-1?
                           null:
                            
                           <Dropdown placeholder='Select Society' 
                           options={choices}
                           onChange={this.handleChange}
                            selection
                            fluid
                            
                            value={this.state.soc_choice}/>
                            

                       }
                           </Col>
                       </Row>
                        <Row > 
                        <Col span={20}>
                        <Form.Item >
                            <Button type='danger' onClick={()=>{this.onSignUp(
                                this.state.username,
                                this.state.roll_no,
                                this.state.roll_no,
                                this.state.phoneNo,
                                this.state.soc_choice
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