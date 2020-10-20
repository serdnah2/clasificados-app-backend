let express = require('express');
let router = express.Router();

let { auth } = require('../controllers/login');
let { findLatestPublications, findMyPublications, findByCityAndCategory, findById } = require('../controllers/search');

router.get('/health', (req, res, next) => {
    res.send('Running');
})

router.post('/auth', auth);
router.get('/search/me/:userId', findMyPublications);
router.get('/search/latest/:items', findLatestPublications);
router.get('/search/filter/:cityId/:categoryId', findByCityAndCategory);
router.get('/search/:publicationId', findById);

exports.router = router;
