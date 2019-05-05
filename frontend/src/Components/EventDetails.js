import React, { Component } from 'react';
import {Row,Col,Button,Spin} from 'antd'
import axios from 'axios'
import {Popup,Modal} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
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
            userId:'',
            success:true,
            show:false,
            userEmail:'',
             transId:'',
            transaction:false
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
                firebase.database().ref(`${id}`).on('value',ss=>this.setState({userEmail:ss.val().email}))
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

    
    onTransaction()
    {
        const soc_id=this.props.match.params.soc_id
        const stud_id=this.state.userId
         
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/Transaction/',
            data: {
            event_id:soc_id,
            student_id:stud_id,
            reg_fee:this.state.data.reg_fee,
            transaction_id:this.state.transId}
        }
        ).then(()=>{
           
            
        })
        .catch(console.log('Failed'))
    }


     
    onRegister()
    {
        this.setState({show:true})
        const stud_id=this.state.userId
        const event_id=this.props.match.params.soc_id
        let trans_id=stud_id+''+event_id
        this.setState({transId:trans_id})
       if(this.state.userId!='')
       {
        const soc_id=this.props.match.params.soc_id
        const soc_name=this.props.match.params.evt_name
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/Registration/',
            data: {
            event_id:soc_id,
            part_id:this.state.userId,
            
                       
            } 
        }).then(()=>{
            this.setState({success:true})
             
        })
        .catch(error => {
            this.setState({success:false})
        })
            
       }
     
    }
 
delayedResponse()
{
    setTimeout(() => {
        this.setState({spinner:false})
        
    }, 7000);
}

onLikePress()
{
    this.setState({liked:!this.state.liked})
}
    
    render() {
        
        return (
            <div style={{minHeight:'150vh'}}> 
               {this.state.valid_data && this.state.data!=null?
               <Row>
                   <Col span={4}>
                   </Col>
                   <Col span={16}>
                   <center>
                   <div style={{fontSize: 28,fontWeight:'700'}}>
                   {this.state.data.event_name}
                  
                   
                    
                   </div>
                <center><h4>By {this.state.socName}</h4></center>
                
                <p style={{fontSize: 22}}>
           {this.state.data.event_desc}
                </p>
                
                       {this.state.data.reg_fee!=0?
                       <h2>Registration Fee : Rs. {this.state.data.reg_fee}</h2>
                       :null
                       }
                    
                {
                    this.state.userId!=''?
                    <Modal trigger={
                        <Button type='primary' style={{marginRight: 10}} onClick={()=>{this.onRegister()}}>REGISTER</Button>
                    } >
                    <Modal.Header>
                        REGISTRATION
                    </Modal.Header>
                    <Modal.Content style={{padding: 30}}>
                        
                            {this.state.success?
                            <div>
                                <p>Confirm your registration for the event {this.props.match.params.evt_name} by {this.state.socName} on {this.state.data.event_date}</p><br />
                            <p>For Rs. {this.state.data.reg_fee}</p>
                            <br /><br /><Link to={{
                    pathname:`/transaction/${this.state.transId}`,
                    state:{
                        evt_name:this.props.match.params.evt_name,
                        userId:this.state.userId,
                        evt_org:this.state.socName,
                        evt_price:this.state.data.reg_fee,
                        transId:this.state.transId

                    } 
                    
                }}>
                <center><Button onClick={()=>{this.onTransaction()}}>Make Payment</Button></center></Link>
                            </div>
                            :
                            <h3>ALREADY REGISTERED</h3>
                        }

                             
                    </Modal.Content>
                    </Modal>
                    
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