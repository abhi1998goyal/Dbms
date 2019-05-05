import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'semantic-ui-react';
 

class SendEmail extends Component {
    constructor()
    {
        super()
        this.state={
            name:'',
            email:'',
            message:''
        }
    }

    async onSend(name,email,message)
    {
       const form=await axios.post('/mailServ',{
            name,
            email,
            message
        })
    }

    render() {
        return (
            <div style={{minHeight:'100vh'}}>
                <h1>LOL</h1>
                <input placeholder='name' value={this.state.name} onChange={(text)=>{
                    this.setState({name:text.target.value})
                }}/><br/>
                <input placeholder='email' value={this.state.email} onChange={(text)=>{
                    this.setState({email:text.target.value})
                }}/><br/>
                <input placeholder='message' value={this.state.message} onChange={(text)=>{
                    this.setState({message:text.target.value})
                }}/><br/><br/>
                <Button onClick={()=>{this.onSend(this.state.name,this.state.email,this.state.message)}}>Send</Button>
                            </div>
        );
    }
}

export default SendEmail;