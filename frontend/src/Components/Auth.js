import React, { Component } from 'react';
import {Form,Button,Input} from 'antd'
import {Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import axios from 'axios'

 

class Auth extends Component {
    constructor()
    {
        super()
        this.state={
            visible: false ,
            email:'',
            password:'',
            username:'',
            roll_no:'',
            phoneNo:8765467584
            

        }
        
    }
       onLogin(email,password,username,roll_no)
        {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            console.log("Logged in")
            axios({
                method: 'post',
                url: 'http://localhost:8000/api/Student/',
                data: {
                    roll_no:roll_no,
                  name: username,
                  email_id: email,
                //   phone_no:'8585858585'
                  
                } 
              }).catch(error => {
                    console.log(error)
              }).then(response => {
                  console.log(response)
              });
            this.setState({visible:false})
        })
        .catch((err)=>{console.log(err)})
        
    }
         
    render() {
        
        return (
             <div>
                 
             
            <Modal
                open={this.state.visible}
                trigger={<Button type='primary' 
                    style={{backgroundColor: '#DB0000',borderWidth:'0'}} 
                    onClick={()=>{this.setState({visible:true})}}
                    >
                    Sign In
                </Button>}
               
                
                
                

            >
            <Modal.Header>Sign In</Modal.Header>
                 <br /><br /><Form layout='inline'>
                <center>
                <Form.Item >
                    <Input size='large'
                     placeholder='Enter Username' 
                     
                     value={this.state.username}
                     
                     onChange={(text)=>{this.setState({username:text.target.value})}}
                     />
                </Form.Item><br/>
                <Form.Item >
                    <Input size='large'
                     placeholder='Enter Roll No.' 
                     
                     value={this.state.roll_no}
                     
                     onChange={(text)=>{this.setState({roll_no:text.target.value})}}
                     />
                </Form.Item><br/>   
                <Form.Item >
                    <Input size='large'
                     placeholder='Enter Email' 
                     
                     value={this.state.email}
                     
                     onChange={(text)=>{this.setState({email:text.target.value})}}
                     />
                </Form.Item><br/>
                <Form.Item >
                <Input size='large'
                 placeholder='Enter Password' 
                 type='password'
                 value={this.state.password}
                 onChange={(text)=>{this.setState({password:text.target.value})}}
                 />
                </Form.Item><br/>
                <Form.Item>
                    <Button type='primary' style={{marginRight: 10}} onClick={()=>{this.onLogin(this.state.email,this.state.password,this.state.username,this.state.roll_no)}}>Log In</Button>
                    <Button type='danger' style={{marginLeft: 10}} onClick={()=>{this.setState({visible:false})}}>Cancel</Button>
                </Form.Item><br />
                 <Form.Item>
                 <Link to='/auth' onClick={()=>{this.setState({visible:false})}}>Don't Have an Account Yet? Click Here</Link>
                 </Form.Item>
                </center>
            </Form> 
            </Modal>
             </div>
        );
    }
}

export default Auth;