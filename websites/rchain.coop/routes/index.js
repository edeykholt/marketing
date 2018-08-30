var express = require('express');
var router = express.Router();
const newsletter = require('../controllers/newsletter.js');


router.get('/', function (req, res) {
    res.render('index', {
        title: 'RChain',
        style: 'index',
        ogtitle: 'RChain',
        ogdescription: "",
        ogurl: 'https://rchain.coop/',
        ogimg: '',
        scripts: '/js/homepage_Browser.js'
    });
});


router.get('/get-started', function (req, res) {
    res.render('get-started', {
        title: 'get-started',
        style: 'get-started',
        ogtitle: 'RChain',
        ogdescription: "",
        ogurl: 'https://rchain.coop/get-started',
        ogimg: '',
        scripts: '/js/get-started_Browser.js'
    });
});

router.get('/platform', function (req, res) {
    res.render('platform', {
        title: 'rchain platform',
        style: 'platform',
        ogtitle: 'rchain platform',
        ogdescription: "",
        ogurl: 'https://rchain.coop/platform',
        ogimg: '',
        scripts: ''
    });
});

router.get('/learn-rholang', function (req, res) {
    res.render('learn-rholang', {
        title: 'Learn Rholang',
        style: 'learn-rholang',
        ogtitle: 'Learn Rholang',
        ogdescription: "",
        ogurl: 'https://rchain.coop/platform',
        ogimg: '',
        scripts: '/js/learn-rholang_Browser.js'
    });
});

router.get('/rchain-cooperative', function (req, res) {
    res.render('rchain-cooperative', {
        title: 'RChain Cooperative',
        style: 'rchain-cooperative',
        ogtitle: 'RChain Cooperative',
        ogdescription: "",
        ogurl: 'https://rchain.coop/rchain-cooperative',
        ogimg: '',
        scripts: ''
    });
});

/* POST Newsletter signup. */
router.post('/newsletter-submission', function (req, res) {
    var success = ["success"];
    var errors = newsletter.formValidation(req);
    if (req.validationErrors()) {
        res.send(errors);
    } else {
        newsletter.saveSubmission(req);
        res.send(success);
    }
});

module.exports = router;