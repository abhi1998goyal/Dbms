import React, { Component } from 'react';
import {Input,Button,Spin,DatePicker,Row,Col,message} from 'antd'
import axios from 'axios';
import firebase from 'firebase'
import { Dropdown } from 'semantic-ui-react'

const event_types=[
    {
        "key": "s",
      "text": "Sports",
      "value": "s"
    },
    {
        "key": "t",
        "text": "Technology",
        "value": "t"
    },
    {
        "key": "c",
        "text": "Cultural",
        "value": "c"
    }
   
]

const event_formats=[
    {
        "key": "w",
      "text": "Workshop",
      "value": "w"
    },
    {
        "key": "comp",
        "text": "Competition",
        "value": "comp"
    },
    {
        "key": "conf",
        "text": "Conference",
        "value": "conf"
    }
   
]


const info = () => {
    message.info('This is a normal message');
  };

class CreateEventPage extends Component {
    constructor()
    {
        super()
        this.state={
            name:'',
            date:'',
            type:'',
            img:null,
            posterImg:'',
            org_id:'',
            event_format:'',
            loading:true,
            showData:false,
            uploading:-1,
            complete:false
        }
        this.onFileLoad=this.onFileLoad.bind(this)
        this.uploadToFirebase=this.uploadToFirebase.bind(this)
        this.deleteFromFirebase=this.deleteFromFirebase.bind(this)
    }

    

    onFileLoad=(e)=>{
        if(e.target.files[0])
        {
            const image=e.target.files[0]
            this.setState({img:image})
        }
       
    }

    uploadToFirebase=()=>{
        const uploadTask=firebase.storage().ref(`${this.state.org_id}/${this.state.org_id+'_'+this.state.name.replace(/\s/g, '')}`)
        .put(this.state.img)

        uploadTask.on('state_changed',
        (snap)=>{
            this.setState({uploading:0})
        }
        ,(error)=>{
            this.setState({uploading:-1,img:null,posterImg:''});
            console.log(error)
        },(complete)=>{
            this.setState({uploading:1});

            firebase.storage().ref(`${this.state.org_id}`).
            child(this.state.org_id+'_'+this.state.name.replace(/\s/g, ''))
            .getDownloadURL().then(url=>{this.setState({posterImg:url})})
            
        })
    }

    deleteFromFirebase=()=>
    {
        firebase.storage().ref(`${this.state.org_id}/${this.state.org_id+'_'+this.state.name.replace(/\s/g, '')}`).delete() 
        .then(this.setState({uploading:-1,posterImg:''}))    
    }

    handleTypeChange=(e, { value })=>
    {
        
        this.setState({
            type:value
        })
    }

    handleFormatChange=(e, { value })=>
    {
        
        this.setState({
            event_format:value
        })
    }
    componentWillMount()
    {
        firebase.auth().onAuthStateChanged(user=>{
            if(user)
            {
                const email_id=user.email
                const p=email_id.indexOf('r')
                const q=email_id.indexOf('@')
                const id=email_id.substr(p+1,q-p-1)
                // this.setState({org_id:id,loading:false,showData:true})
                firebase.database().ref(id).on('value',ss=>{
                    let addr=ss.val().path
                    axios.get(addr).then(res=>{
                      let user_type=res.data.userType
                      if(user_type=='u')
                      {
                        this.setState({loading:false,showData:false})
                      }
                      else
                      {
                        this.setState({org_id:id,loading:false,showData:true})
                      }
                    })
                  })
            }
            else
            {
                this.setState({loading:false,showData:false})
            }
        })
    }
    onDateSelect(date,dateString)
    {
        this.setState({date:dateString})
    }
    createEvent()
    {
        
        
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/Event/',
            data: {
            event_id:this.state.org_id+'_'+this.state.name.replace(/\s/g, ''),
            event_name:this.state.name,
            organizer_id:19015016,
            poster_img:this.state.posterImg,
            event_type:this.state.type,
            event_div:this.state.event_format,
            event_date:this.state.date            
            } 
        }).catch(error => {
                console.log(error)
        }).then(res=>{
            alert(`Created Event ${this.state.name}`);
            this.setState({
                name:'',
                date:'',
                type:'',
                
                posterImg:'',
                
                event_format:'',
                
                
                uploading:-1,
                complete:false 
            });
            
        })
    }

     
    render() {
        return (this.state.showData?
            <div style={{minHeight:'100vh',width: 300,paddingTop:150}}>
                
                <DatePicker onChange={(date,dateString)=>{this.onDateSelect(date,dateString)}} />
                    <br/><br/>
                
                <Dropdown placeholder='Select Event Type' 
                           options={event_types}
                           onChange={this.handleTypeChange}
                            selection
                            fluid
                            
                            value={this.state.type} /><br/><br/>
                
                <Input placeholder='Enter Name of your Event' 
                value={this.state.name} 
                onChange={(text)=>{this.setState({name:text.target.value})}}/><br/><br/>
                
                <Dropdown placeholder='Select Event Format' 
                           options={event_formats}
                           onChange={this.handleFormatChange}
                            selection
                            fluid
                            
                            value={this.state.event_format} /><br/><br/>
                
                <Row>
                    <Col span={14}>
                    <input type='file' onChange={this.onFileLoad}/>
                    </Col>
                    {this.state.uploading==-1?
                    <div>
                        <Col span={5}>
                    <Button onClick={this.uploadToFirebase}>✓</Button>
                    </Col>
                    <Col span={5}>
                    <Button>X</Button>
                    </Col>
                    </div>
                    :this.state.uploading==0?
                    <Col span={8}>
                    <Button><Spin /></Button>
                    </Col>
                    :
                    <Col span={8}>
                    <Button onClick={this.deleteFromFirebase}>X</Button>
                    </Col>
                    }
                </Row>
                
                <br /><br/>
               
                {
                    this.state.posterImg!=''?
                <Button  type='primary' onClick={()=>{
                    this.createEvent();
                    
                }} >Create Event</Button>
                :

                <Button disabled type='primary' onClick={()=>{this.createEvent()}}>Create Event</Button>
                
                }

            </div>:
            !this.state.showData && this.state.loading?
            <div style={{minHeight:'100vh'}}>
            <Spin />

            </div>:
            !this.state.showData && !this.state.loading?
            <div style={{minHeight:'100vh'}}>
                <p style={{fontSize: '38',color:'black'}}>Unauthorized Access</p>
            </div>:
            null
        );
    }
}

export default CreateEventPage;