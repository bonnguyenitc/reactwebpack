const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

// router.get('/try', (req, res, next) => {
//     res.send("helleo");
// });

// router.post('/tri', (req, res, next) => {
//     res.send(req.body);
// });

router.post('/signIn', (req, res, next) => {
    var {username, password} = req.body;
    if(username === 'bon' && password === '123') {
        req.session.username = username;
        return res.send("DANG_NHAP_THANH_CONG");
    }
    res.send("DANG_NHAP_THAT_BAI");
    
});

router.get('/getInfo', (req, res, next) => {
    if(req.session.username) {
        return res.send(req.session.username);
    }
    res.send('CHUA_DANG_NHAP');
})

router.get('/logout', (req, res, next) => {
    req.session.username = undefined;
    res.send("DA_DANG_XUAT");
});

module.exports = router;