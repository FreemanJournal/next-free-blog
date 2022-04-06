import React, { useEffect, useState } from 'react'

export default function useProductReview(parentElement) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/review.json')
      .then(res => res.json())
      .then(reviews => setData(reviews))
  }, [])

  if (parentElement === "Home") {
    return [data.slice(0, 3)]
  } else {
    return [data]
  }


}
