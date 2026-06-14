import { useState } from "react";
import {
  Brain,
  FileText,
  Map,
  Code2,
  Trophy,
  Rocket,
} from "lucide-react";
import "./App.css";

function App() {
  const [fileName, setFileName] = useState("");
  const [showResult, setShowResult] = useState(false);

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      setShowResult(false);
    }
  }

  function analyzeResume() {
    if (!fileName) {
      alert("Please upload your resume first");
      return;
    }

    setShowResult(true);
  }

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
        <h1>Forge Your Tech Career</h1>
        <p>
          A student career dashboard for SDE, AI/ML, Quant, projects, resumes
          and internship preparation.
        </p>
        <button>
          <Rocket size={18} /> Start Building
        </button>
      </section>

      <section id="features" className="section">
        <h2>What CareerForge Helps With</h2>

        <div className="cards">
          <div className="card">
            <FileText size={40} />
            <h3>Resume Analyzer</h3>
            <p>Improve your resume for internships and placements.</p>
          </div>

          <div className="card">
            <Map size={40} />
            <h3>Career Roadmap</h3>
            <p>Follow a clear path for SDE, AI/ML and Quant roles.</p>
          </div>

          <div className="card">
            <Code2 size={40} />
            <h3>Project Tracker</h3>
            <p>Track projects, GitHub links and deployment progress.</p>
          </div>

          <div className="card">
            <Brain size={40} />
            <h3>Skill Planner</h3>
            <p>Plan DSA, development, system design and ML learning.</p>
          </div>

          <div className="card">
            <Trophy size={40} />
            <h3>Internship Prep</h3>
            <p>Prepare for coding rounds, contests and interviews.</p>
          </div>

          <div className="card">
            <Rocket size={40} />
            <h3>Launch Ready</h3>
            <p>Build a portfolio that looks professional and real.</p>
          </div>
        </div>
      </section>

      <section id="resume" className="section resume-box">
        <h2>Resume Analyzer</h2>
        <p>Upload your resume PDF and get an instant sample review.</p>

        <input type="file" accept=".pdf" onChange={handleFileChange} />

        {fileName && (
          <p className="file-name">
            Uploaded: <b>{fileName}</b>
          </p>
        )}

        <button onClick={analyzeResume}>Analyze Resume</button>

        {showResult && (
          <div className="result">
            <h3>Resume Report</h3>
            <p>
              <b>ATS Score:</b> 78/100
            </p>
            <p>
              <b>Strong Area:</b> Technical skills and project section.
            </p>
            <p>
              <b>Weak Area:</b> Missing measurable impact and live links.
            </p>
            <p>
              <b>Suggestion:</b> Add GitHub, LinkedIn, deployed project URLs and
              numbers like “reduced time by 30%” or “built for 100+ users”.
            </p>
          </div>
        )}
      </section>

      <section id="roadmap" className="section">
        <h2>Your 4-Step Career Roadmap</h2>

        <div className="timeline">
          <div>
            <h3>1. Master DSA</h3>
            <p>Arrays, strings, recursion, linked list, trees, graphs and DP.</p>
          </div>

          <div>
            <h3>2. Learn Full Stack</h3>
            <p>React, Node.js, Express, MongoDB, APIs and deployment.</p>
          </div>

          <div>
            <h3>3. Build Projects</h3>
            <p>Create 3 strong projects with GitHub repos and live links.</p>
          </div>

          <div>
            <h3>4. Apply for Internships</h3>
            <p>Use referrals, LinkedIn, GitHub, hackathons and cold emails.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Made by Tanay Ranjan | CareerForge Dashboard</p>
      </footer>
    </div>
  );
}

export default App;