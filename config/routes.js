const router = require('express').Router()
const auth = require('../controllers/authorization')
const locations = require('../controllers/locations')
const posts = require('../controllers/posts')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')


router.route('/login')
  .post(auth.login)

router.route('/register')
  .post(auth.register)

// --------------- ROUTES FOR GETTING LOCATION DATA FROM GOOGLE --------------

router.route('/locations')
  .post( locations.getLocalFacilityData) 

router.route('/locations/co')
  .post(locations.getCoOrdinates)

router.route('/locations/:placeId')
  .post(locations.getOneFacility) 
  

// --------------- ROUTES FOR MAKING/DELETE POSTS AND LIKES --------------

router.route('/profile/:userId/post')
  .post(secureRoute, posts.newPost)


router.route('/profile/:userId/post/:postId')
  .delete(secureRoute, posts.deletePost)


router.route('/profile/:userId/post/:postId')
  .put(secureRoute ,posts.addLike)

// --------------- ROUTE FOR USER PROFILE --------------
router.route('/profile/:userId')
  .get(users.show)

module.exports = router