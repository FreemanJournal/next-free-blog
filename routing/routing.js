import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/404/404'
import BlogsPage from '../pages/BlogsPage/BlogsPage'
import Dashboard from '../pages/Dashboard/Dashboard'
import Home from '../pages/Home/Home'
import ReviewPage from '../pages/ReviewPage/ReviewPage'

export default function Routing() {
  return (
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='reviews' element={<ReviewPage/>}/>
        <Route  path='blogs' element={<BlogsPage/>}/>
        <Route  path='dashboard' element={<Dashboard/>}/>
        <Route  path='*' element={<NotFound/>}/>
    </Routes>
  )
}
