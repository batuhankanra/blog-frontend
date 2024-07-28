import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import { useDispatch } from 'react-redux'
import { _loadUser } from '~/stores/auth'

export default function MainLayout() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(_loadUser())
  },[dispatch])
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
