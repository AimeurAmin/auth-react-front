import React, { useState } from 'react'
import authService from '../services/authService';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});

  const updateInputEmail = (e) => {
    const email = e.target.value;
    setUser((prev) => ({
      ...prev,
      email
    }));
  }

  const updateInputPassword = (e) => {
    const password = e.target.value;
    setUser((prev) => ({
      ...prev,
      password
    }));
  }

  const login = () => {
    authService.login(user).then((res) => {
      console.log('res: ', res);
    }).catch((err) => console.log(err) )

    const userInfo = authService.getCurrentUser()

    console.log('local storage');
    console.log(userInfo.user);
  }

  return (
    <div>
       {user.email} - 
       {user.password}
       <input type="text" placeholder="email" onChange={(e) => updateInputEmail(e)}/>
       <span>
        <input type={showPassword ? "text" : "password"} placeholder="password" onChange={(e) => updateInputPassword(e)}/>
        <button onClick={() => setShowPassword((prev) => (!prev))}>toggle</button>
       </span>

       <div>
        <button onClick={login}>login</button>
       </div>
    </div>
  )
}

export default Login
