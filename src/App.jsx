import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>CareerForge</h2>
        <div>
          <a href="#features">Features</a>
          <a href="#resume">Resume</a>
          <a href="#roadmap">Roadmap</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Build Your Career Like a Pro</h1>
        <p>
          CareerForge helps students prepare for SDE, AI/ML, Quant and tech
          internships with resume analysis, skill roadmap and project planning.
        </p>
        <button>Start Now</button>
      </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <div className="cards">
          <div className="card">
            <h3>Resume Analyzer</h3>
            <p>Upload your resume and get improvement suggestions.</p>
          </div>
          <div className="card">
            <h3>Skill Roadmap</h3>
            <p>Get step-by-step learning path for your dream role.</p>
          </div>
          <div className="card">
            <h3>Project Ideas</h3>
            <p>Find portfolio projects for internships and placements.</p>
          </div>
        </div>
      </section>

      <section id="resume" className="section resume-box">
        <h2>Resume Analyzer</h2>
        <p>Upload your resume PDF</p>
        <input type="file" accept=".pdf" />
        <button>Analyze Resume</button>

        <div className="result">
          <h3>Sample Result</h3>
          <p><b>ATS Score:</b> 72/100</p>
          <p><b>Strength:</b> Good technical skills section.</p>
          <p><b>Improve:</b> Add project links, GitHub and measurable impact.</p>
        </div>
      </section>

      <section id="roadmap" className="section">
        <h2>Career Roadmap</h2>
        <div className="timeline">
          <div>
            <h3>Step 1: DSA</h3>
            <p>Arrays, strings, recursion, trees, graphs, DP.</p>
          </div>
          <div>
            <h3>Step 2: Development</h3>
            <p>React, Node.js, APIs, databases, deployment.</p>
          </div>
          <div>
            <h3>Step 3: Projects</h3>
            <p>Build 3 strong projects and deploy them live.</p>
          </div>
          <div>
            <h3>Step 4: Internships</h3>
            <p>Apply through LinkedIn, referrals, GitHub and contests.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Made by Tanay | CareerForge Dashboard</p>
      </footer>
    </div>
  );
}

export default App;