var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;

// dbConnectionString mongodb+srv://dbLibrary:1331axxa@cluster0.sspxk.mongodb.net/local_library?retryWrites=true&w=majority
