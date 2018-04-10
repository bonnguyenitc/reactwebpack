import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class AccountInfo extends React.Component{
    logOut(e){
        e.preventDefault();
         var {dispatch} = this.props;
        axios.get('/logout')
        .then(res => {
            dispatch({type:"LOG_OUT"})
        })
        .catch(err => {
            console.log(err);
        });
    }
    render(){
        return(
            <div>
                <h1>AccountInfo</h1>
                <h3>{this.props.username}</h3>
                <a href="#" onClick={this.logOut.bind(this)}>Log out</a>
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {username : state.username};
})(AccountInfo);