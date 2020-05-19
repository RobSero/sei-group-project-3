import React from 'react'
import ProfileGroups from './ProfileGroups'



class profileSidebar extends React.Component {
  // * props: user, groups
  state = {
    user : {},
    modal: false
  }

toggleModal = () => this.setState({ modal : !this.state.modal })

  render() {
  return (
<div>
<div className='profile-sidebar'>
  <div className='events-container'>
    <div className='sidebar-head'> 
    <h1>Events</h1>
    <p>+ New Event</p>
    </div>
  </div>

  <div className='groups-container'>
  <div className='sidebar-head'> 
    <h1>Groups</h1>
    <p onClick={this.toggleModal}>+ New Group</p>
    </div>
    <div className="groups-list">
      <ProfileGroups 
      user={this.props.user}
      groups={this.groups}
      toggleModal={this.toggleModal}
      modal={this.state.modal}/>
      // * changed set and remove modal to one toggle function - tom
      {/* user={this.props.user}
      groups={this.props.groups}
      setModal={this.props.setModal}
      hideModal={this.props.hideModal}
      modal={this.props.modal}/> */}
      
      </div>
      </div>
    </div>
    <div className="center-text">Contact us | Spot.me 2020</div>
    </div>





    )
  } 
}
export default profileSidebar