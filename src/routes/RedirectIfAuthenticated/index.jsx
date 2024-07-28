import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RedirectIfAuthenticated ({children}) {
  const isAuthenticated = !!localStorage.getItem('loginToken')
  return isAuthenticated ? <Navigate to={'/'}/> : children
}
