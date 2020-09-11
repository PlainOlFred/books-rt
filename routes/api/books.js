const router = require('express').Router();
const db = require('../../models')

/**
 * @Route '/api/book/
 */
router.get('/', function(req, res) {
    db.Book.find({})
    .then(function(data) {
        
        res.json(data)
    })
})

router.post('/', function(req, res) {
    db.Book.create(req.body)
    .then(function() {
        res.json({create: true})
    })
})



module.exports = router;
