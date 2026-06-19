import { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import {
  Brain,
  FileText,
  Map,
  Code2,
  Trophy,
  Rocket,
} from "lucide-react";

import ProjectTracker from "./components/ProjectTracker";
import InternshipTracker from "./components/InternshipTracker";
import Contact from "./components/Contact";
import SkillsProgress from "./components/SkillsProgress";
import "./App.css";

function App() {
  const [fileName, setFileName] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [atsScore, setAtsScore] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      setShowResult(false);
    }
  }

  function analyzeResume() {
  if (!fileName) {
    alert("Please upload a resume first");
    return;
  }

  const randomScore =
    Math.floor(Math.random() * 31) + 70;

  setAtsScore(randomScore);
  setShowResult(true);
}

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <nav className="navbar">
        <h2>CareerForge</h2>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
          <SignedOut>
            <SignInButton mode="modal">
              <button>Sign In</button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button>Sign Up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      <section className="hero">
        <h1>Forge Your Tech Career</h1>

        <p>
          A student career dashboard for SDE, AI/ML, Quant, projects, resumes
          and internship preparation.
        </p>

      <a href="#resume" className="hero-button">
  <Rocket size={18} /> Start Building
</a>
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
            <p>Prepare for coding rounds and interviews.</p>
          </div>

          <div className="card">
            <Rocket size={40} />
            <h3>Launch Ready</h3>
            <p>Build a professional portfolio.</p>
          </div>
        </div>
      </section>

      <section id="resume" className="section resume-box">
        <h2>Resume Analyzer</h2>

        <SignedOut>
          <div className="result">
            <h3>Login Required</h3>
            <p>Please sign in to upload and analyze your resume.</p>

            <SignInButton mode="modal">
              <button>Sign In to Continue</button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
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
  <b>ATS Score:</b>{" "}
  <span
    style={{
      color:
        atsScore < 75
          ? "red"
          : atsScore <= 85
          ? "orange"
          : "limegreen",
      fontWeight: "bold",
    }}
  >
    {atsScore}/100
  </span>
</p>
              <p>
                <b>Strong Area:</b> Technical skills section.
              </p>
              <p>
                <b>Weak Area:</b> Missing impact metrics.
              </p>
              <p>
  <b>Suggestion:</b>{" "}
  {atsScore < 75
    ? "Your resume needs significant improvement. Add projects, skills and links."
    : atsScore <= 85
    ? "Good resume. Add measurable achievements and improve formatting."
    : "Excellent resume. Ready for most internship applications."}
</p>
            </div>
          )}
        </SignedIn>
      </section>
     
      <ProjectTracker />
      <InternshipTracker />
      <SkillsProgress />
      <Contact />

      <section id="roadmap" className="section">
        <h2>Your 4-Step Career Roadmap</h2>

        <div className="timeline">
          <div>
            <h3>1. Master DSA</h3>
            <p>Arrays, Trees, Graphs, DP.</p>
          </div>

          <div>
            <h3>2. Learn Full Stack</h3>
            <p>React, Node.js, APIs, Databases.</p>
          </div>

          <div>
            <h3>3. Build Projects</h3>
            <p>Deploy real-world applications.</p>
          </div>

          <div>
            <h3>4. Apply for Internships</h3>
            <p>Referrals, LinkedIn, Hackathons.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Made by Tanay Ranjan | CareerForge</p>
      </footer>
    </div>
  );
}

export default App;