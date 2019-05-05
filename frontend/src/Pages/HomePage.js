import React, { Component } from 'react';
import {Carousel,Row,Col} from 'antd'
import img1 from '../arduino_workshop.jpg'
import img2 from '../ml_workshop.jpg'
import img3 from '../workshop_iot.png'
import {Card,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
             
                <div style={{minHeight:'180vh'}}>
               
                <br/>
                <Carousel autoplay >
                <div ><img src={img2} height={560} width='100%'/></div>
                 <div><img src={img1} height={560} width='100%'/></div>
                 <div><img src={img3} height={560} width='100%'/></div>
               </Carousel><br/>
                 <Row >
                <Col span={12}>
                <Link to='/events'>
                <Card style={{padding: 20,marginTop:10}}>
                     <Card.Header>
                         Events
                     </Card.Header>
                     <Card.Content>
                        <Icon  name='calendar alternate outline' style={{fontSize: 120}}/>
                     </Card.Content>
                 </Card>
                </Link> 
                </Col>
                <Col span={12}>
                <Link to='/events'>
                <Card style={{padding: 20,marginTop:10}}>
                     <Card.Header>
                         Societies
                     </Card.Header>
                     <Card.Content>
                        <Icon  name='group' style={{fontSize: 120}}/>
                     </Card.Content>
                 </Card> 
                 </Link>
                </Col>
                </Row> 
                <Row >
                <Col span={12}>
                <Link to='/create-event'>
                <Card style={{padding: 20,marginTop:40}}>
                     <Card.Header>
                            Organize Events
                     </Card.Header>
                     <Card.Content>
                        <Icon  name='announcement' style={{fontSize: 120}}/>
                     </Card.Content>
                 </Card> 
                </Link>
                </Col>
                <Col span={12}>
               <Link to='/about-us'>
               <Card style={{padding: 20,marginTop:40}}>
                     <Card.Header>
                         Contact Us
                     </Card.Header>
                     <Card.Content>
                        <Icon  name='mail' style={{fontSize: 120}}/>
                     </Card.Content>
                 </Card> 
               </Link>
                </Col>
                </Row>
                   
                
             </div>
             
        );
    }
}

export default HomePage;