const router = require('express').Router()
const articleRoutes = require('./articles')

// Routes
router.use('/articles', articleRoutes)

module.exports = router
