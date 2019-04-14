import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <center style={{paddingTop:  180}}>
                   <h1 style={{color:'red'}}>ERROR 404</h1>
                   <p>This page does not exist!!</p>
                </center>
            </div>
        );
    }
}

export default ErrorPage;