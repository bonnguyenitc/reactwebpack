import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addItem, toggle} from 'action';

class NoteForm extends React.Component{

    handleSubmitAdd(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch(addItem(this.refs.txt.value));
    }
    toggle() {
        var {dispatch} = this.props;
        dispatch({
            type: 'TOGGLE_IS_ADDING'
        });
    }
    render(){
        if(this.props.isAdding) 
            return(
                <div>
                    <form onSubmit={this.handleSubmitAdd.bind(this)}>
                        <input type="text" ref="txt"/>
                        <br/><br/>
                        <button>Thêm</button>
                    </form>
                </div>
            );
        return <button onClick={this.toggle.bind(this)} >Thêm</button>
    }
}
module.exports = connect(function(state){
    return {isAdding : state.isAdding}
})(NoteForm);