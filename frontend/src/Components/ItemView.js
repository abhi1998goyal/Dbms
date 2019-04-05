import React, { Component } from 'react';
import {Card} from 'antd'

class ItemView extends Component {
    render() {
        return (
            <Card cover={<img src='https://picsum.photos/200/300/?random' style={{height: 200}}/>} style={{width:300,flexDirection: 'column',marginTop: 20,borderWidth:10}}>
                
                <p>{this.props.name}</p>
                <p>{this.props.desc}</p>
                <p>{this.props.date}</p>

            </Card>
        );
    }
}

export default ItemView;