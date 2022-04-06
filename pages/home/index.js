import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import Reviews from '../../components/Reviews/Reviews'
import useProductReview from '../../hooks/useProductReview'

export default function Home() {
  const [data] = useProductReview('Home')
  return (
    <>
      <Header />
      <HeroSection />
      <Reviews data={data}/>
    </>
  )
}
