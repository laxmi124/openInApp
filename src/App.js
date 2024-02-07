import React, { useState } from 'react'
import Login from './components/Login'
import Upload from './components/Upload'
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
   const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();
  
    if (isLoading) {
     return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Oops... {error.message}</div>;
    }

  return (
    <div>
       {isAuthenticated ? <Upload /> : <Login />}
    </div>
  )
}

export default App
