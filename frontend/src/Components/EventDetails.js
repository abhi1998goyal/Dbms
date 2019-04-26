import React, { Component } from 'react';
import {Row,Col,Button} from 'antd'
import axios from 'axios'

class EventDetails extends Component {
    constructor()
    {
        super()
        this.state={
            liked:false,
            data:[],
            valid_data:true,
            socName:''
        }
    }
    componentWillMount()
    {

        const soc_id=this.props.match.params.soc_id
        const soc_name=this.props.match.params.evt_name
        axios.get(`http://127.0.0.1:8000/api/Event/${soc_id}`).then((res)=>{
            console.log(this.props.match.params);
            if(soc_name!=res.data.event_name)
            {
                this.setState({valid_data:false})
                this.setState({data:null})
            }
            else 
            { 
            this.setState({data:res.data})
            axios.get(`http://127.0.0.1:8000/api/Organizer/${res.data.organizer_id}`)
            .then(resp=>this.setState({socName:resp.data.society}))

            }
        }
            ).catch(
                ()=>{
                    this.setState({valid_data:false})
                this.setState({data:null})
                }
            )
    }
onLikePress()
{
    this.setState({liked:!this.state.liked})
}
    
    render() {
        
        return (
            <div style={{minHeight:'100vh'}}> 
               {this.state.valid_data && this.state.data!=null?
               <Row>
                   <Col span={4}>
                   </Col>
                   <Col span={16}>
                   <center>
                   <div style={{fontSize: 28,fontWeight:'700'}}>
                   {this.state.data.event_name}
                   <span style={{float:'right'}}>
                       {
                           this.state.liked==true?
                           <Button onClick={()=>{this.onLikePress()}} type='ghost' color='#02FF02' style={{marginTop: 10,color:'#02FF02',borderColor: '#02FF02'}}>✓</Button>
                           :
                           <Button onClick={()=>{this.onLikePress()}} type='ghost' color='#C21600' style={{marginTop: 10,color:'#C21600',borderColor: '#C21600'}}>+</Button>
                       }
                    </span>
                   
                    
                   </div>
                <center><h4>By {this.state.socName}</h4></center>
                
                <p style={{fontSize: 22}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                 into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                 software like Aldus PageMaker including versions of Lorem Ipsum.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                 into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                 software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
             
                <Button type='primary' style={{marginRight: 10}}>REGISTER</Button>
                
                </center>

                   </Col>
                   <Col span={4}>
                   </Col>
               </Row>
               :
               <center style={{paddingTop:  180}}>
                   <p style={{color:'red',fontSize: 72,fontWeight: 700}}>ERROR 404</p>
                   <h3>Page does not exist</h3>
                </center>
               }
            </div>
        );
    }
}

export default EventDetails;