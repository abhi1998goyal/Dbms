import React, { Component } from 'react';
import {Card,Button,Modal,Icon} from 'semantic-ui-react'
import {Spin} from 'antd'
import axios from 'axios'
import {Redirect} from 'react-router-dom'



class TransactionPage extends Component {
constructor()
{
    super()
    this.state={
        currentDate:'',
        spinner:false,
        evt_name: '',
        evt_org:'',
        evt_price:'',
        transId:'',
        userId:'',
        show:false,
        redirect: false
    }
}

setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
componentDidMount()
{
    console.log(this.props.location)
    var tod=new Date()
    var dd=tod.getDate()
    var mm=tod.getMonth()+1
    var yyyy=tod.getFullYear()
    var date=yyyy+'-'+mm+'-'+dd
    this.setState({
        currentDate:date,
        evt_name: this.props.location.state.evt_name,
        evt_org:this.props.location.state.evt_org,
        evt_price:this.props.location.state.evt_price,
        transId:this.props.location.state.transId,
        userId:this.props.location.state.userId
    })   

}

renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/events' />
    }
  }

startLoading()
{
    setTimeout(() => {
        this.setState({spinner:false,show:true})
    }, 2500);
}
onPress()
{
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/PaymentSuccess/',
        data: {
        transaction_id:this.state.transId,
        dateOfPayment:this.state.currentDate,
        registration_id:this.state.transId
                   
        } 
    }).then(()=>{
        this.setState({success:true,spinner:true});
        this.startLoading()
         
    })
    .catch(error => {
        
    })
}
    render() {
        return (
            <div style={{minHeight:'100vh'}}>
            {this.renderRedirect()}
            <br /><br />
                <Card style={{width:'80%'}}>
                    {!this.state.spinner?
                    <div>
                        <Card.Header>
                        <h2>PAYMENT DETAILS</h2>
                    </Card.Header>
                    <Card.Content textAlign='left' style={{marginLeft:60}}>
                        <div><b><h2>User : </h2></b>{this.state.userId}</div><br/>
                        <div><b><h2>Event : </h2></b>{this.state.evt_name}</div><br/>
                        <div><b><h2>Society : </h2></b>{this.state.evt_org}</div><br/>
                        <div><b><h2>Payment Fee : </h2></b>Rs. {this.state.evt_price}</div><br/>
                        <div><b><h2>Transaction Id : </h2></b>{this.state.transId}</div>
                    </Card.Content>
                    <Card.Content>
                        <Modal trigger={
                            <Button color='green' onClick={()=>this.onPress()}>
                            Confirm
                        </Button>
                        } open={this.state.show} >
                        <Modal.Content>
                            <center><Icon style={{fontSize: 72}} name='check circle' color='green' /><br/>
                            Payment Successful!!</center>

                        </Modal.Content>
                        <Modal.Content >
                           <center> <Button color='red'onClick={()=>{
                               this.setState({show:false});
                               this.setRedirect()
                               }}>Close</Button></center>
                        </Modal.Content>
                        </Modal>
                        <Button color='red'>
                            Cancel
                        </Button>
                    </Card.Content>
                    </div>
                    :
                     
                    <Spin size='large' />
                    }
                    
                </Card>
            </div>
        );
    }
}

export default TransactionPage;