import React, { Component } from 'react';
import ItemView from './ItemView';
import {Row,Col,Button} from 'antd'

class Events extends Component {
    render() {
        return (
            <div>
                {this.props.events.map(item=>(
            <Col key={item.id} span={8}> 
                <ItemView 
                name={item.name} 
                desc={item.description} 
                date={item.date} 
                linkId={item.id} 
                socName={item.societyName}/>
            </Col>

           ))}
            </div>
        );
    }
}

export default Events;