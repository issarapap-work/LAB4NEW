import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState ("");
  const [passWord, setPassWord] = useState ("");
  const [error, setError] = useState ("");

  const handleLogin = async (e:React.FormEvent) => {
    e.preventDefault();
    if(!userName || !passWord){
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch('https://weblab.localapp.cc/user-profile/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: userName, password: passWord}),
      });
      const data = await response.json();
      if(response.ok) {
        navigate('/landing')
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred");
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username"/>
        <input type="password" value={passWord} onChange={(e) => setPassWord (e.target.value)} placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;