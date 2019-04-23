import React, { Component } from 'react';

class ErrorPage extends Component {
    
     
    render() {
        return (
            <div style={{minHeight:'100vh'}}>
                <center style={{paddingTop:  180}}>
                   <p style={{color:'red',fontSize: 72,fontWeight: 700}}>Error 404</p>
                    <p>Page Does not Exist</p>
                  
                </center>
            </div>
        );
    }
}

export default ErrorPage;