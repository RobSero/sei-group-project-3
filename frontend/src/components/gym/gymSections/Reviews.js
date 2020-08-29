import React from 'react'


const Reviews = ({reviews,status}) => {
  console.log(reviews)
  const showSection = status? 'display-block' : 'display-none'
  return (
    <div className={`${showSection} review-field`}>
    <h1>Reviews</h1>
    {reviews.length > 0? reviews.map(review => {
      return <div className='review-field-item' key={review.author_name}>
        <p className="name" >{review.author_name} </p>
        <p className='rating'> Rating: {review.rating} </p>
        <p className='date'>Date: {review.relative_time_description}</p>
        <p className='text'>{review.text}</p>
      </div>
    })  : 'No Reviews' } 
  </div>
  )
}

export default Reviews