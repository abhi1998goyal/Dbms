import React, { Component } from 'react';
import {Row,Col,Button} from 'antd'
import {Popup} from 'semantic-ui-react'
import axios from 'axios'
import firebase from 'firebase'
class EventDetails extends Component {
    constructor()
    {
        super()
        this.state={
            liked:false,
            data:[],
            valid_data:true,
            socName:'',
            userId:''
        }
    }
    componentWillMount()
    {

        firebase.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                const email_id=user.email
      const p=email_id.indexOf('r')
      const q=email_id.indexOf('@')
      const id=email_id.substr(p+1,q-p-1)
                this.setState({userId:id})
            }})
            

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
onRegister()
{
   if(this.state.userId!='')
   {
    const soc_id=this.props.match.params.soc_id
    const soc_name=this.props.match.params.evt_name
    axios({
        method: 'post',
        url: 'http://localhost:8000/api/Registration/',
        data: {
        event_id:soc_id,
        part_id:this.state.userId
                   
        } 
    }).catch(error => {
            alert('Already Registered')
    }).then(()=>{alert('Registered')})
        
   }
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
                   {/* <span style={{float:'right'}}>
                       {
                           this.state.liked==true?
                           <Button onClick={()=>{this.onLikePress()}} type='ghost' color='#02FF02' style={{marginTop: 10,color:'#02FF02',borderColor: '#02FF02'}}>✓</Button>
                           :
                           <Button onClick={()=>{this.onLikePress()}} type='ghost' color='#C21600' style={{marginTop: 10,color:'#C21600',borderColor: '#C21600'}}>+</Button>
                       }
                    </span> */}
                   
                    
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
             
                {
                    this.state.userId!=''?
                    <Button type='primary' style={{marginRight: 10}} onClick={()=>{this.onRegister()}}>REGISTER</Button>
                    :
                    <Popup trigger={
                        <Button type='primary' style={{marginRight: 10}} disabled >REGISTER</Button>
                    } content='Please Log In First' />
                }
                
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