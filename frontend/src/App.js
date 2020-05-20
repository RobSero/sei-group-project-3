import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GymLocations from './components/gym/gymLocations'
import GymShow from './components/gym/GymShow'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/social/Profile'
import editProfile from './components/social/editProfile'
import NewsFeedsCard from './components/social/NewsFeedsCard'
import GroupShow from './components/groups/GroupShowPage'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/locations/:placeId' component={GymShow} />
          <Route path='/locations' component={GymLocations}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile/:userId/edit' component={editProfile} />
          <Route path='/profile/:userId' component={Profile}/>
          <Route path='/home' component={NewsFeedsCard}/>
          {/* <Route path='/feed/:userId' component={NewsFeedsCard}/> */}
          <Route path='/groups/:groupId' component={GroupShow}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
