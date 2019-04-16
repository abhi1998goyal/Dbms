import React, { Component } from 'react';
import {Form,Button,Input} from 'antd'
import {Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import firebase from 'firebase'

 

class Auth extends Component {
    constructor()
    {
        super()
        this.state={
            visible: false ,
            email:'',
            password:'',
            

        }
        
    }

    
      
       

        onLogin(email,password)
        {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            console.log("Logged in")
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
                    <Button type='primary' style={{marginRight: 10}} onClick={()=>{this.onLogin(this.state.email,this.state.password)}}>Log In</Button>
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