import React from 'react'

export default function ReviewItem(props) {
  return (
    <div className="alert alert-info">
      <h5>{props.reviewItemData.title }</h5>
      <p>{props.reviewItemData.description }</p>
      <p><strong>{props.reviewItemData.author.name}</strong> - {props.reviewItemData.date}</p>
    </div>
  )
}
