import React, { useState } from 'react'
import authService from '../services/authService'

function Profile() {
  const [user, setUser] = useState({});
  const getUser = () => {
    setUser(() => ({
      ...authService.getCurrentUser()
    }));

    console.log(authService.getCurrentUser());
  }

  return (
    <div>
      <button onClick={getUser}>get current user</button>
    </div>
  )
}

export default Profile
