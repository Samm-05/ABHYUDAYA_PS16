import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate(); // ✅ MOVE INSIDE COMPONENT

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">CampusConnect</div>
        <button
          className="nav-btn"
          onClick={() => navigate("/signup")}
        >
          Join Now
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <span className="badge fade-in">🎓 Verified College Network</span>

        <h1 className="hero-title glow-text slide-up">
          Your College.<br />
          Your Private Social Network.
        </h1>

        <p className="hero-subtitle fade-in-delay">
          A secure social networking platform exclusively for verified college students.
          Share posts, build connections, and chat privately — only after mutual connection.
        </p>

        <div className="hero-actions fade-in-delay-2">
          <button className="btn-primary" onClick={() => navigate("/signup")}>
            Get Started
          </button>
          <button className="btn-outline" onClick={() => navigate("/login")}>
            Learn More
          </button>
        </div>

        <div className="hero-glow"></div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">What CampusConnect Offers</h2>
        <div className="features-grid">
          <div className="feature-card">🔐<h3>College-Only Access</h3></div>
          <div className="feature-card">📰<h3>Campus Feed</h3></div>
          <div className="feature-card">🤝<h3>Connection Requests</h3></div>
          <div className="feature-card">💬<h3>Private Chat</h3></div>
          <div className="feature-card">📂<h3>Chat History</h3></div>
          <div className="feature-card">🧑‍💼<h3>Profile & Connections</h3></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 CampusConnect · College-Only Social Network
      </footer>

    </div>
  );
}
