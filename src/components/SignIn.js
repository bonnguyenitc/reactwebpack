import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class SignIn extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {username, password} = this.refs;

        // if(username.value === 'bon' && password.value === '123') {
        //     dispatch({type: 'LOG_IN', username: username.value});
        // }

        //console.log('submit');

        axios.post('/signIn', { username : username.value, password : password.value })
        .then(res => {
            if(res.data === "DANG_NHAP_THANH_CONG"){
                dispatch({type: 'LOG_IN', username: username.value});
            } else{
                dispatch({type: 'SHOW_NOTIFICATION', txt : "Sai mật khẩu or tên đăng nhập"})
            }
        })
        .catch(error => console.log(error));
    }
    render(){
        return(
            <div className="text-center">
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <legend className="title-text"> Đăng nhập </legend>
                    <input type="text" ref="username" defaultValue="bon" />
                    <br/>
                    <br/>
                    <input type="password" ref="password" defaultValue="123"/>
                    <br/><br/>
                    <button type="submit" className="button">Đăng nhập</button>
                </form>
            </div>
        );
    }
}

module.exports = connect()(SignIn);