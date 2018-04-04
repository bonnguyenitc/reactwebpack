const React = require('react');
const ReactDOM = require('react-dom');
var List = require('List');
var {Provider} = require('react-redux');
//var Provider = require('react-redux').Provider;
var store = require('store');

ReactDOM.render(
    <Provider store = {store}>
        <List />
    </Provider>    , 
    document.getElementById('root')
)

// require('./example');

/*

*/ 
// var obj = {
//     name : "bng",
//     age  : 15
// };
// //sao chép, thêm prototype, ghi đề prototype
// var obj2 = {...obj, height: 180, age : 155};
// //console.log(obj2);
// var mang = [1,2,3,4,5];
// var arr = [7,8,9,...mang];
// mang[0]=1000;
// console.log(arr);
// console.log(mang);

//pure function : 
/* 
    + không làm thay đổi biến bên ngoài
    + ko thay đổi biến truyền vào
    + không chưa async
    + one input => one output
*/
// var add = (a, b) => a + b;
// console.log(add(5, 6));