import React from 'react';
import Header from '../../components/Header/Header';
import Reviews from '../../components/Reviews/Reviews';
import useProductReview from '../../hooks/useProductReview';

export default function ReviewPage() {
  const [data] = useProductReview('ReviewPage')
  return (
    <>
    <Header/>
    <Reviews data={data}/>
    </>
  )
}
