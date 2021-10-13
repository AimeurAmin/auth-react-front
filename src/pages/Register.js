import React, { useState } from 'react'
import AuthService from '../services/authService';

function Register() {
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

  const register = () => {
    AuthService.register(user).then((res) => console.log(res)).catch((err) => console.log(err) )
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
        <button onClick={register}>register me</button>
       </div>
    </div>
  )
}

export default Register
