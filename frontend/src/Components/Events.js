import React, { Component } from 'react';
import ItemView from './ItemView';
import {Row,Col,Button} from 'antd'

//Define actual parameters of Event to be seen
class Events extends Component {
    render() {
        return (
            <div>
                {this.props.events.map(item=>(
            <Col key={`${item.organizer_id}-${item.event_name}`} span={8}> 
                <ItemView 
                name={item.event_name} 
                desc='Lorem Impsum' 
                date={item.event_date} 
                event_id={item.event_id}
                event_desc={item.event_desc}
                 pricing={item.reg_fee}
                orgId={item.organizer_id}
                cover_img={item.poster_img}
                />
            </Col>

           ))}
            </div>
        );
    }
}

export default Events;