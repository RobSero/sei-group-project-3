import React from 'react' 
import Post from './Post'
import { getProfile } from '../../lib/api'

class Profile extends React.Component {
state = {
  user: {}
}

async componentDidMount() {
  try {
    const userId = this.props.match.params.userId
    const res = await getProfile(userId)
    this.setState( { user: res.data } )  
  } catch (err) {
    console.log(err)
  }
}

render(){
  return (
    <div>
      <Post 
        user={this.state.user}
      />
    </div>
  )
}
}

export default Profile