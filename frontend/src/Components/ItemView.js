import React, { Component } from 'react';
import {Card} from 'antd'

class ItemView extends Component {
    render() {
        return (
            <Card style={{width:300,flexDirection: 'column',marginTop: 20}}>
                <p>{this.props.name}</p>
                <p>{this.props.desc}</p>
                <p>{this.props.date}</p>

            </Card>
        );
    }
}

export default ItemView;