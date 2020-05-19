import React from 'react'

function GroupSidebar(props) {
  // console.log('yo');
  const members = props.members
//  console.log(props.members);
 
  return (
<div className='profile-sidebar'>
  <div className='groups-container'>
  <div className='sidebar-head'> 
    <h1>Members</h1>
    </div>
{ members?  members.map(member => {
  return (
    <div key={member._id}> 
    <img src={member.image} alt='group-img'/>
    <p>{member.firstName} {member.lastName}</p>
    </div>
  )
}) : ''}
      </div>
    </div>
    )
  
}
export default GroupSidebar