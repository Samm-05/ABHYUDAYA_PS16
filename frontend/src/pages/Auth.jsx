import { Link } from 'react-router-dom';
import '../styles/landing.css';

export default function Auth() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">CampusConnect</div>
      </nav>

      <div className="auth-container">
        <h2 className="auth-title">Welcome — Join CampusConnect</h2>

        <p className="auth-note">
          Already a member? <Link to="/login" className="link-btn">Login</Link> · <Link to="/signup" className="link-btn">Sign up</Link>
        </p>

        <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
          <Link to="/signup" className="btn-primary" style={{ textDecoration: 'none' }}>Create Account</Link>
          <Link to="/login" className="btn-outline" style={{ textDecoration: 'none' }}>Login</Link>
        </div>
      </div>
    </div>
  );
}