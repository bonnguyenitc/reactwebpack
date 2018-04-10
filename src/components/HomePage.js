import React from 'react';
import axios from 'axios';

class HomePage extends React.Component{
    handleRequest(){
        // axios.get('/try')
        // .then(res => console.log(res))
        // .catch(error => console.log(error));

        axios.post('/tri', {username : 'bng'})
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    }
    render(){
        return(
            <div>
                <h1>HomePage</h1>
                <button onClick={this.handleRequest.bind(this)}>Send</button>
            </div>
        );
    }
}

module.exports = HomePage;