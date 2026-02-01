import React, { useState } from 'react';
import '../styles/landing.css';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login({ name, email, password });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div>
      <nav className="navbar"><div className="logo">CampusConnect</div></nav>
      <div className="auth-container">
        <h2 className="auth-title">Welcome back</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input className="input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
          <input className="input" placeholder="College email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <div className="auth-actions">
            <button className="btn-primary" type="submit">Login</button>
            <a className="btn-outline" href="/signup">Sign up</a>
          </div>
        </form>
        <p className="auth-note">Use your verified college email to join a secure campus network.</p>
      </div>
    </div>
  );
}