
import React, { Component } from 'react';
import axios from 'axios'
import { Button ,Row,Col} from 'antd';
import {Label,Card,Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class OrgPage extends Component {
   
   constructor()
   {
       super()
       this.state={
           data:[],
           events:[]
       }
   }
    componentWillMount()
     {
         const id=this.props.match.params.id
         console.log(id)
        axios.get(`http://127.0.0.1:8000/api/Organizer/${id}`).then(res=>{
            this.setState({data:res.data});

        })
        
        axios.get('http://127.0.0.1:8000/api/Event').then(res=>{
            let fullList=res.data
            let eventsList=[]
            for(let i=0;i<fullList.length;i++)
            {
                if(fullList[i].organizer_id==id)
                {
                    eventsList.push(fullList[i])
                }
            }
            this.setState({events:eventsList})
        })



    
    }
    
    render() {
        return (
            <div style={{minHeight:'150vh'}}>
            <br/> 
             <Card style={{width:'80%',paddingTop:10}}>
                 <Card.Header > 
                     <Label color='orange' size='big'>ORGANIZER INFO</Label>
                </Card.Header>
                <Card.Content style={{textAlign:'left',margin:20}}>
                    <h3><Label color='orange'>Name</Label> : {this.state.data.name}</h3>
                    <h3><Label color='orange'>Society</Label> : {this.state.data.society}</h3>
                    <h3><Label color='orange'>Phone No</Label> : {this.state.data.phone_no}</h3>
                </Card.Content>
             </Card>
            <Card style={{width:'80%'}}>
                <Card.Header>
                <Label color='blue' size='big'>YOUR EVENTS</Label>
                
               
                </Card.Header>
                <Card.Content>
                <Row>
                <Link to='/create-event'> <Button type='primary' style={{float:'right',margin:10}}>Create New Event</Button></Link>
                </Row>
                <Row>
                        {this.state.events.map(item=>(
                           <Col key={item.event_id} span={8}>
                            <Card >
                                <Card.Header>
                              <b>  {item.event_name}</b>
                                </Card.Header>
                                <Card.Content>
                                  <p>Date : {item.event_date}</p>
                                 <center> <Image size='small' src={item.poster_img} /></center>
                                </Card.Content>
                            </Card>
                           </Col>
                        ))}
                        </Row>

                    
                </Card.Content>
            </Card>
             
             
            </div>
        );
    }
}

export default OrgPage;