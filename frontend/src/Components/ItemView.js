import React, { Component } from 'react';
import {Card,Button} from 'antd'
import {Link} from 'react-router-dom'

class ItemView extends Component {
    render() {
        return (
            <Card cover={<img src={this.props.cover_img} style={{height: 200}}/>} style={{width:300,flexDirection: 'column',marginTop: 20,borderWidth:10}}>
                
                <p>{this.props.name}</p>
                <p>{this.props.desc}</p>
                <p>{this.props.date}</p>
              <Link to={{
                    pathname:`/events/${this.props.event_id}/${this.props.name}`,
                    query:{
                        title:this.props.name,
                        societyId:this.props.orgId
                    }
                    
                }}>  <Button>More Information</Button></Link>

            </Card>
        );
    }
}

export default ItemView;