import React, { Component } from 'react';
import {Form,Button,Input,Modal} from 'antd'
 

class Auth extends Component {
    constructor()
    {
        super()
        this.state={
            visible: false 
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
        }
        
        hideModal = () => {
        this.setState({
            visible: false,
        });
        }
    render() {
        
        return (
             <div>
                 <Button type='primary' style={{backgroundColor: '#DB0000',borderWidth:'0'}} onClick={this.showModal}>
             Register</Button> 
            <Modal
            visible={this.state.visible}
            onOk={this.hideModal}
          onCancel={this.hideModal}
          okText='Login'
            >
                 <Form layout='inline'>
                <center>
                <Form.Item>
                    <Input size='large' placeholder='Enter Username' style={{width:'100%'}}/>
                </Form.Item><br/>
                <Form.Item>
                <Input size='large' placeholder='Enter Password' type='password' />
                </Form.Item><br/>
                 
                </center>
            </Form> 
            </Modal>
             </div>
        );
    }
}

export default Auth;