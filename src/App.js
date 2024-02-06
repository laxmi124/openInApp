import React, { useState } from 'react'
import Login from './components/Login'
import Upload from './components/Upload'
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
   const { isAuthenticated } = useAuth0();
  
  return (
    <div>
       {isAuthenticated ? <Upload /> : <Login />}
    </div>
  )
}

export default App
