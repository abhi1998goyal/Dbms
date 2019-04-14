import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <center style={{paddingTop:  180}}>
                   <p style={{color:'red',fontSize: 72,fontWeight: 700}}>ERROR 404</p>
                   <h3>Page does not exist</h3>
                </center>
            </div>
        );
    }
}

export default ErrorPage;