const router = require("express").Router();
const bookApi = require('./books')

router.use('/book', bookApi)

module.exports = router