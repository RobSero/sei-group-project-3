import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GymLocations from './components/gym/gymLocations'
import GymShow from './components/gym/GymShow'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import gymProfile from './components/gym/gymProfile'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path='/locations' component={GymLocations}/>
          <Route path='/locations/:placeId' component={GymShow} />
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={gymProfile}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
