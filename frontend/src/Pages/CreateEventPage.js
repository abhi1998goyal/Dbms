import React, { Component } from 'react';
import {Input,Button} from 'antd'
import axios from 'axios';

class CreateEventPage extends Component {
    constructor()
    {
        super()
        this.state={
            name:'',
            date:'',
            type:'',
            img:'',
            org_id:''
        }
    }
    onCreateEvent()
    {
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/Event/',
            data: {
            event_id:this.state.org_id+'_'+this.state.name,
            event_name:'',
            organizer_id:'',
            poster_img:'',
            event_type:'',
            event_div:'',
            event_date:''            
            } 
        }).catch(error => {
                console.log(error)
        }).then(res=>{
            console.log(res.data)
        })
    }
    render() {
        return (
            <div style={{minHeight:'100vh'}}>
                <Input placeholder='Enter Date' />
                <Input placeholder='Choose Event Type' />
                <Input placeholder='Enter Event Name' />
                <Input placeholder='Enter Event Division' />
                <Input placeholder='Choose Poster Image' /><br />
                <Button type='primary'>Create</Button>

            </div>
        );
    }
}

export default CreateEventPage;