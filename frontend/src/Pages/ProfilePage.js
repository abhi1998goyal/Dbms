import React, { Component } from 'react';
import axios from 'axios'
import {Card,Loader,Label,Image,Icon} from 'semantic-ui-react'
import {Row,Col,Spin} from 'antd'

class ProfilePage extends Component {
  
    constructor()
    {
        super()
        this.state={
            data:[],
            events_enrolled:[],
            events_data:[],
            loading:true

        }
    }
    componentWillMount()
    {
        const id=this.props.match.params.id
       axios.get(`http://127.0.0.1:8000/api/Student/${id}`).then(res=>{
           this.setState({data:res.data});
           let events=res.data.event_part
           let data=[]

           events.map(i=>{
               axios.get(`http://127.0.0.1:8000/api/Event/${i}`).then(res_e=>data.push(res_e.data))
           })
           this.setState({events_data:data})
          
       })
       
       
       
   }

   
    

   
    render() {
        return (
            <div style={{minHeight:'100vh',paddingTop: 20}}>
                
                <Card style={{width:'80%',paddingTop: 10}}>
                    
                   {this.state.data!=null? 
                   <div>
                       <Card.Header>
                        
                        <Label color='orange' size='huge'>User Info</Label>
                        

                    </Card.Header>
                          
                 <Card.Content style={{textAlign:'left',margin:20}}>
                         <h3><Label color='orange'>Name</Label> : {this.state.data.name}</h3>
                        <h3><Label color='orange'>Roll No</Label> : {this.state.data.roll_no}</h3>
                        <h3><Label color='orange'>Phone No</Label> : {this.state.data.phone_no}</h3>
                    </Card.Content>
                   </div>
                    :
                    <Spin/>
                    }
                </Card>  

                <Card style={{width:'80%',paddingTop:10}}>
                    
                         
                         
                            <Card.Header style={{paddingBottom: 10}}>
                    <Label color='blue' size='huge'>Enrolled Events</Label>
                     
                    </Card.Header> 
                    <Card.Content style={{textAlign: 'left'}}>
                        <Row>
                        {this.state.events_data.map(item=>(
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

export default ProfilePage;