import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {removeItem} from 'action';
class Note extends React.Component{
    handleRemove(){
        var {index, dispatch} = this.props;
        dispatch(removeItem(this.props.index));
    }
    render(){
        return(
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.handleRemove.bind(this)}>Delete</button>
            </div>
        );
    }
}
module.exports = connect()(Note);