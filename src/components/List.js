import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';


class List extends React.Component{
    render(){
        return(
            <div>
                <NoteForm />
                {this.props.mang.map((e, i) => {
                    return <Note key={i}  index={i}>{e}</Note>
                })}
            </div>
        );
    }
}

module.exports = connect(function(state){
    // mảng trở thành props của List
    return {mang: state.mang}
})(List);