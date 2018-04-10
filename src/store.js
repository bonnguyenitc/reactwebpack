var redux = require('redux');
var reducer = require('reducer');

// tạo store
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension?window.devToolsExtension(): f => f
));

module.exports = store;