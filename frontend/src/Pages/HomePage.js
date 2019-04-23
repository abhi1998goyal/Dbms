import React, { Component } from 'react';
import {Carousel,Row,Col} from 'antd'
import img1 from '../arduino_workshop.jpg'
import img2 from '../ml_workshop.jpg'
import img3 from '../workshop_iot.png'

class HomePage extends Component {
    render() {
        return (
             
                <div style={{minHeight:'200vh'}}>
               
                <br/>
               <Carousel autoplay >
                 <div ><img src={img2} height={500} width='95%'/></div>
                 <div><img src={img1} height={500} width='95%'/></div>
                 <div><img src={img3} height={500} width='95%'/></div>
               </Carousel>
                   
                
             </div>
             
        );
    }
}

export default HomePage;