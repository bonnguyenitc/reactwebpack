var redux = require('redux');
var reducer = require('reducer');
// var defaulState = {
//     mang : ['Android', 'IOS', 'NodeJS'],
//     isAdding : false
// };
//tạo reducer
// var reducer = (state = defaulState, action) => {
//     switch (action.type) {
//         case 'TOGGLE_IS_ADDING':
//             return {...state, isAdding : !state.isAdding}
//             break;
//         case "ADD_ITEM":
//             return {...state, mang: [...state.mang, action.item]}
//         case "REMOVE_ITEM":
//             return {...state, mang: state.mang.filter((e,i) =>  i != action.index)}
//         default:
//             return state;         
//     }
    
// }



// var reducer = redux.combineReducers({
//     mang: mangReducer,
//     isAdding : isAddingReducer
// });
// tạo store
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension?window.devToolsExtension(): f => f
));
// store.subscribe(() => {
//     var str = store.getState();
//     document.getElementById('detail-redux').innerHTML = JSON.stringify(str);
// });

//console.log(store.getState());
//thực hiện action
// store.dispatch({type:'TOGGLE_IS_ADDING'});



// store.dispatch({
//     type: 'ADD_ITEM',
//     item : 'Unity'
// });



// store.dispatch({
//     type : "REMOVE_ITEM",
//     index : 1
// });
module.exports = store;