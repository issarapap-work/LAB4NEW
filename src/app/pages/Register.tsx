'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName || !passWord) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch('https://weblab.localapp.cc/user-profile/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, passWord }),
      });
      const data = await response.json();
      if (response.ok) {
        router.push('/landing'); // ใช้ router.push แทน navigate
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred while registering");
      console.error(error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Registeหหr</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* แสดงข้อความ error */}
    </div>
  );
};

export default Register;
