import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to My Awesome CI/CD Demo</h1>
        <p className="subtitle">Automated deployment with GitHub Actions & Pages</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🚀 Automated Deployment</h3>
            <p>Every push to main triggers automatic deployment</p>
          </div>
          <div className="feature-card">
            <h3>✅ Code Quality</h3>
            <p>ESLint checks ensure clean, consistent code</p>
          </div>
          <div className="feature-card">
            <h3>🧪 Testing</h3>
            <p>Automated tests run before deployment</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React • Deployed with GitHub Actions</p>
      </footer>
    </div>
  );
}

export default LandingPage;