const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory, browserHistory  } = require('react-router');

const redux =  require('redux');
var {Provider} = require('react-redux');
var username = (state = null, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.username;
        case 'LOG_OUT':
            return null;
        default:
            return state;
            break;
    }
    
}

var notification = (state = null, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.txt;
        case 'HIDENOTIFICATION':
            return null;
        default:
            return state;
    }
}

var reducer = redux.combineReducers({username, notification});
var store = redux.createStore(reducer);

// console.log(store.getState());

// store.dispatch({
//     type: 'LOG_IN',
//     username : 'BNG'
// });
// console.log(store.getState());

// store.dispatch({
//     type: 'LOG_OUT'
// })
// console.log(store.getState());

var HomePage = require('HomePage');
var Nav = require('Nav');
var Account = require('Account');
var Transaction = require('Transaction');
var Main = require('Main');

var requireLogin = (nextState, replace, next) => {
    if(store.getState().username === null) {
        replace('/');
    }
    next();
}

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
require('style-loader!css-loader!sass-loader!./css/style.scss')
$(document).ready(()=> {
    $(document).foundation();
});
ReactDOM.render(
    <Provider store={store}>
        <Router history = {browserHistory}>
            <Router path="/" component={Main}>
                <IndexRoute component={HomePage} />
                <Route path="account" component={Account} />
                <Route path="transaction" component={Transaction} onEnter={
                    requireLogin
                } />
            </Router>
        </Router>
    </Provider>, 
    document.getElementById('root')
)

