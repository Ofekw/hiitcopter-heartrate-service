// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                
var bodyParser = require('body-parser');

var heartRates = [];

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.put('/heartrate', function(req, res) {
   heartRates.push({time : new Date(), heartrate: req.query.heartrate});
   res.json({ message: 'heartrate recorded' });   
});

router.get('/heartrate', function(req, res) {
   res.json(heartRates[heartRates.length-1]);
   res.json({ message: 'heartrate sent' });  
});

router.get('/heartrates', function(req, res) {
   res.json(heartRates);
   res.json({ message: 'heartrates sent' });  
});

router.delete('/heartrates', function(req, res) {
   heartRates = [];
   res.json({ message: 'heartrates deleted' }); 
});




// REGISTER OUR ROUTES -------------------------------

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);