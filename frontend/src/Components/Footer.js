import React, { Component } from 'react';
import {Row,Col,Divider,Input,Button,Icon} from 'antd'


class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#EEE6E6'}}>
                <Row  style={{color:'black',padding:15}}>
                    <Col span={8} >
                        <h3 style={{color:'#EF6545'}}>Site Map</h3>
                        <p>Events</p>
                        <p>About Us</p>
                        
                        
                    </Col>
                     
                    <Col span={8}>
                    <h3 style={{color:'#EF6545'}}>Contact Us</h3>
                    <p>Facebook <Icon theme='filled' type="facebook" style={{color:'#4267B2'}}/></p>
                    <p>Twitter <Icon  type="twitter" style={{color:'#55ADED'}}/></p>
                    <p>Instagram <Icon  type="instagram" style={{color:'#E5415C'}}/></p>
                    
                    </Col>
                     
                    <Col span={8}>
                    <h3 style={{color:'#EF6545'}}>Subscribe to our Newsletter</h3>
                    <p>Enter Your Email </p>
                    <Row >
                        <Col  span={18}>
                        <Input  style={{backgroundColor: '#EEE6E6',borderColor: '#EF6545',borderWidth:1.5,color:'#EF6545'}}/>
                    </Col>
                    <Col span={6} >
                    <Button style={{backgroundColor: '#EEE6E6',borderColor: '#EF6545',borderWidth:1.5,marginLeft:5,color:'#EF6545'}}>Subscribe</Button>
                    </Col>
                    </Row>

                    </Col>
                </Row>                
            </div>
        );
    }
}

export default Footer;