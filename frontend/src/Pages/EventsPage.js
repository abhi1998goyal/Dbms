import React, { Component } from 'react';
import Events from '../Components/Events'
import axios from 'axios'

class EventsPage extends Component {
     constructor()
 {
   super()
   this.state={
    //  events:[
    //   {
    //     id:1,
    //     name:'ABC',
    //     societyName:'IETE',
    //     description:'Description for the event.....',
    //     date:'05-04-2019'
    
    //   },
    //   {
    //     id:2,
    //     name:'PQR',
    //     societyName:'CCS',
    //     description:'Description for the event.....',
    //     date:'05-04-2019'
    //   },
    //   {
    //     id:3,
    //     name:'XYZ',
    //     societyName:'IETE',
    //   description:'Description for the event.....',
    //   date:'05-04-2019'
    //   },
    //   {
    //     id:4,
    //     name:'UVW',
    //     societyName:'CCS',
    //   description:'Description for the event.....',
    //   date:'05-04-2019'
    //   },
    //   {
    //     id:5,
    //     name:'ABC',
    //     societyName:'IETE',
    //     description:'Description for the event.....',
    //     date:'05-04-2019'
    
    //   },
    //   {
    //     id:6,
    //     name:'PQR',
    //     societyName:'CCS',
    //     description:'Description for the event.....',
    //     date:'05-04-2019'
    //   },
    //   {
    //     id:7,
    //     name:'XYZ',
    //     societyName:'IETE',
    //   description:'Description for the event.....',
    //   date:'05-04-2019'
    //   },
    //   {
    //     id:8,
    //     name:'UVW',
    //     societyName:'CCS',
    //   description:'Description for the event.....',
    //   date:'05-04-2019'
    //   },
       
      
    // ]
  
    events:[]
  }
 }
 componentDidMount()
 {
   axios.get('http://127.0.0.1:8000/api/Event/').then(res=>this.setState({events:res.data}))
 }
    render() {
        return (
            <div style={{background:'linear-gradient(to right bottom, #369AB1, #65AF62)'}}>
               <center> <Events events={this.state.events} /></center>
            </div>
        );
    }
}

export default EventsPage;