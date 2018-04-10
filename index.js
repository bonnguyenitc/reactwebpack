const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');



const app = express();


// imp router
const index = require('./routers/index');

var port = process.env.PORT || 3000;

// views
app.set('view engine','ejs');

// set static
app.use("/public",express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(session({
    secret : "reactjs",
    saveUninitialized: true,
    resave: false,
    cookie : {
        maxAge : 1000*60*60*24
    }
  }))


app.use((req, res, next)=>{
    res.locals.err = req.flash('error');
    next();
});

// user route
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development

res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

app.listen(port, (req, res) => {
    console.log("Server is running");
});

