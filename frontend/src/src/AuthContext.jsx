import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cc_user')) || null; } catch { return null; }
  });
  const navigate = useNavigate();

  async function signup(data) {
    const res = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    if (!res.ok) throw new Error(body.message || 'Signup failed');
    localStorage.setItem('cc_token', body.token);
    localStorage.setItem('cc_user', JSON.stringify(body.user));
    setUser(body.user);
  }

  async function login(data) {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    if (!res.ok) throw new Error(body.message || 'Login failed');
    localStorage.setItem('cc_token', body.token);
    localStorage.setItem('cc_user', JSON.stringify(body.user));
    setUser(body.user);
    navigate('/dashboard');
  }

  function logout() {
    localStorage.removeItem('cc_token');
    localStorage.removeItem('cc_user');
    setUser(null);
    navigate('/');
  }

  const isAuthenticated = Boolean(localStorage.getItem('cc_token'));

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);