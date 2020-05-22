import React, { useReducer } from 'react'
import { getUserId } from '../../lib/auth'
import { defaultImage } from '../../lib/notifications'


class NewsFeedsCard extends React.Component {

  render () {
    const { post, like, comment ,change, commentDelete, 
    deletePost, i , setIndex, indexState, currentUser, value } = this.props
    // const post = this.props.post? this.props.post : ''
    return (
      <>
      <div className="wrap-center">
        <div className="feeds-container">

          <div className="feeds-header">
            <div className='feeds-user-info'>
              <img 
              src={post.owner? post.owner.image : defaultImage } 
              alt="test" 
              />
              <h4 className="feeds-header-title">{post.owner.username}</h4> 
            </div>
            
            <div 
              className={currentUser.id === post.owner.id ? 
                'display-block' : 'display-none'}
              onClick={()=>{
                deletePost(`${post._id}`)}}>
                  <p className='delete-text'>Delete </p>
              </div>
          </div>

          <div className="feeds-content">
            <h1>{post.content}</h1>
          </div>
          <div className="feeds-image">
            <figure>
              {post.image ? <img src={post.image} alt="test"/> : null}
            </figure>
          </div>
          <div 
            onMouseEnter={()=>{
              setIndex(`${i}`)
            }} className="feeds-likes"
            onMouseLeave={()=>{
              setIndex(null)
            }}>
            <img 
              className="likes" 
              src={require('../../assets/muscle.png')} 
              alt="logo"/>
                
            <div className={`likes-hover ${i.toString() === indexState ? 'display-block' : 'display-none'}`}>  
              {post.likes? post.likes.map((like,i) => {
                return <p key={i}>{`${like.firstName}`}{`${like.lastName}`} liked this</p>
              }) : null}
            </div>
            <p><span>{post.likes.length > 0? post.likes.length : 0 }</span> likes</p>
          </div>
          <div className="feeds-buttons">
            <div className="field center-items">
              <div className="control center-items">
                <button className="feed-button" onClick={()=>{
                  like(`${post.owner.id}`,`${post._id}`)
                }}> 
                  <img 
                    src={require('../../assets/fitness.png')} alt="logo" width="20px"/>
                      Like
                </button>
                <button className="feed-button"> 
                  <img src={require('../../assets/interface (1).png')} alt="logo" width="20px"/>
                    Comment
                </button>
              </div>
            </div>
          </div>
              
          {post.comments ? post.comments.map(comment =>{
            return <div key={comment._id} className='post-comments-container'>
              <div className='post-comment-field'>
                <img src={comment.user.image ? `${comment.user.image}` : defaultImage } 
                  alt='commenters-img'/>
                <div className='commenters-comment'>
                  <p>{comment.user.username}</p>
                  <p>{comment.content}</p>
                  <div 
                    className={currentUser.id === post.owner.id  ? 'display-block' : 'display-none' ||
                  currentUser.id === post.comment.user.id? 'display-block' : 'display-none' }
                    onClick={()=>commentDelete(`${post._id}`,`${post.owner._id}`,`${comment._id}`)}>
                    <p className='delete-text'>delete</p></div>
                </div>
              </div>
            </div>
          }) : null }
          <div className="feeds-comments">
            <figure className="picture">
              <img 
                className="profile-picture" 
                src={currentUser.image? currentUser.image : defaultImage}
                alt="logo" 
              />
            </figure>
            <div className="field">
              <form onSubmit={e=>{
                e.preventDefault(); comment(`${post.owner._id}` , `${post._id}`)
              }}>
                <textarea
                  className="textarea"
                  name="content"
                  placeholder="Write a comment..."
                  onChange={change}
                  value={value}/>
                <button> Send Comment </button> 
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}


export default NewsFeedsCard