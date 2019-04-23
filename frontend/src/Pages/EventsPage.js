import React, { Component } from 'react';
import Events from '../Components/Events'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class EventsPage extends Component {
     constructor()
 {
   super()
   this.state={
    
    redirectToError:false,
    
    
    events:[]
  }
 }
 componentDidMount()
 {
   axios.get('http://127.0.0.1:8000/api/Event/').
   then(res=>this.setState({events:res.data}))
   .catch((err)=>{
     console.log(err)
   })
 }
    render() {
        return (
            
                <div style={{background:'linear-gradient(to right bottom, #EA3131, #F7AF62)',minHeight:'300vh'}} >
               
                   <center> <Events events={this.state.events} /></center>
                   
                    </div>
         
        
        );
    }
}

export default EventsPage;