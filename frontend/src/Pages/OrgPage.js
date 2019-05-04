import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'antd';
import {Label,Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class OrgPage extends Component {
    componentDidMount()
     {
         const id=this.props.match.params.id
        axios.get(`http://127.0.0.1:8000/api/Organizer/${id}`).then(res=>{
            console.log(res.data)
        })


    
    }
    
    render() {
        return (
            <div style={{minHeight:'100vh'}}>
            <br/> 
             <Card style={{width:'80%',paddingTop:10}}>
                 <Card.Header > 
                     <Label color='orange' size='big'>ORGANIZER INFO</Label>
                     
               
             
                     
                 </Card.Header>
             </Card>
            <Card style={{width:'80%'}}>
                <Card.Header>
                <Label color='blue' size='big'>YOUR EVENTS</Label>
                
               
                </Card.Header>
                <Card.Content>
                <Link to='/create-event'> <Button type='primary' style={{float:'right',margin:10}}>Create New Event</Button></Link>
                </Card.Content>
            </Card>
             
             
            </div>
        );
    }
}

export default OrgPage;