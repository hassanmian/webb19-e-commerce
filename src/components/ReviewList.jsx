import React, {useState, useEffect} from 'react'
import ReviewItem from './ReviewItem'

export default function ReviewList(props) {
  const [reviewListData, setReviewListData] = useState(null)

  function fetchReviewList() {
    const reviewListUrl = `https://webb19-e-commerce.firebaseio.com/reviews/${props.productId}.json`
    fetch(reviewListUrl)
    .then(res => res.json())
    .then(data => setReviewListData(data))
  }

  useEffect( () => {
    fetchReviewList()
  }, [])

  return (
    <div>
      {reviewListData && reviewListData.map((reviewItemData, index) => {
        return <ReviewItem key={index} reviewItemData={reviewItemData} />
      })}
    </div>
  )
}
