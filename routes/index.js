var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next){
	console.log("hi");
    res.sendFile(path.join(__dirname, '..','public', 'views', 'index', 'index.html'));
});

router.post('/test',function(req,res,next){
	res.send('this is test');
})

router.get('/about', function(req, res, next){
    res.sendFile(path.join(__dirname, '..','public', 'views', 'index', 'about.html'));
});

module.exports = router;
