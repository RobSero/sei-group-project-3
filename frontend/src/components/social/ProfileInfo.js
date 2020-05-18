import React from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'

class ProfileInfo extends React.Component {
  state ={}

//     followUser = () =>{
//     const userToFollow = axios.post(`/api/profile/:userId/follow`, '' ,
//     { headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}`} }
//   ) 
// }

  render () {
    const {user} = this.props
  return (

    <div className='profile-info-container'>

      <div className='profile-info-section'>

      <Link to={`/profile/${user.id}/edit`}> 
      <img className='edit-profile' src='https://i.imgur.com/8o2WJAN.jpg' alt='edit-icon'/></Link>

      <div className='info-top'>
        <div className='follower-count'>
          <p>9001</p>
        </div>
        <div className='profile-pic-container'>
          <img className='profile-pic'src={'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}  alt='profile-pic'/>
        </div>
          <div className='button-container'>
          <button className='follow-button'> Follow </button>
          </div>
      </div>

      <div className='info-bottom'>
        <div className='info-text'>
        <div className='username'>
          <h1>{user.firstName} {user.lastName}</h1>
          <p>@{user.username}</p>
          <p>{user.level}</p>
          </div>
          <p> {user.description? user.description : ' '}</p>
      </div>
      </div>
      </div>
    </div>



  )
  }
}

export default ProfileInfo