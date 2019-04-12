import React, { Component } from 'react';
import {Card,Button} from 'antd'
import {Link} from 'react-router-dom'

class ItemView extends Component {
    render() {
        return (
            <Card cover={<img src='https://picsum.photos/200/300/?random' style={{height: 200}}/>} style={{width:300,flexDirection: 'column',marginTop: 20,borderWidth:10}}>
                
                <p>{this.props.name}</p>
                <p>{this.props.desc}</p>
                <p>{this.props.date}</p>
                <Button><Link to={{
                    pathname:`/events/${this.props.linkId}`,
                    query:{
                        title:this.props.name,
                        societyName:this.props.socName
                    }
                    
                }}>More Information</Link></Button>

            </Card>
        );
    }
}

export default ItemView;