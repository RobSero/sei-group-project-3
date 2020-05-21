const User = require('../models/user')
const Group = require('../models/Group')


// -------------- Get News Feed ----------------------
// GET request: /news
// no body required
// valid token required
// Will return an array of ALL posts from joined groups and followed users
//! need to populate owner 

async function getNewsFeed(req,res,next){
  let postArray = []
  try {
    // get user and populate following field
    const user = await User.findById(req.currentUser._id).populate('following')
    if (!user) {
      throw new Error('Not Found')
    }

    await Promise.all(user.following.map(  async followedUser => {
      const folUser = await User.findById(followedUser._id).populate('posts.owner')
      const posts = folUser.posts
      postArray = posts
    }))


    // get all groups joined by the user
    const groups = await Group.find()
    const usersGroups = groups.filter(group => {
      let userInGroup = false
      group.members.forEach(member => {
        if (user._id.equals(member)){
          userInGroup = true
        }
      })
      return userInGroup
    })
    // get all posts from each group the user is in
    usersGroups.forEach(group => {
      group.posts.forEach(groupPost => {
        postArray.push(groupPost)
      })
    })
    postArray.sort(function(a, b){
      return b.updatedAt - a.updatedAt
    })
    res.status(200).json(postArray)
  } catch (err){
    next(err)
  }
}



module.exports = {
  getNewsFeed: getNewsFeed
}


// get User's followers
// get followers posts?
// add to array
// get user's groups
// get group's posts
// add to array
// sort by date

// Post a comment on the newsFeed 
