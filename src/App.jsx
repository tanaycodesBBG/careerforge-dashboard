import Sidebar from "./Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "25px", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="text"
            placeholder="Search applications..."
            style={{
              width: "400px",
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: "#1e293b",
              color: "white",
            }}
          />

          <div
            style={{
              background: "#4f46e5",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            T
          </div>
        </div>

        <h1 style={{ fontSize: "48px", textAlign: "center" }}>
          Welcome Back 👋
        </h1>

        <p style={{ textAlign: "center", color: "#94a3b8" }}>
          Track applications, interviews and career growth
        </p>

        <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
          <div style={cardStyle}>
            <h3>Active Opportunities</h3>
            <h2 style={{ color: "#22c55e" }}>148</h2>
          </div>

          <div style={cardStyle}>
            <h3>Applications Sent</h3>
            <h2 style={{ color: "#38bdf8" }}>63</h2>
          </div>

          <div style={cardStyle}>
            <h3>Interview Pipeline</h3>
            <h2 style={{ color: "#facc15" }}>8</h2>
          </div>

          <div style={cardStyle}>
            <h3>Productivity Score</h3>
            <h2 style={{ color: "#a78bfa" }}>92%</h2>
          </div>
        </div>

        <div style={sectionStyle}>
          <h2>Recent Activity</h2>
          <p>✅ Applied to Google SWE Internship</p>
          <p>📚 Completed 5 DSA Problems</p>
          <p>🎯 Interview Scheduled at Amazon</p>
        </div>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={{ ...sectionStyle, flex: 1, marginTop: 0 }}>
            <h2>Priority Tasks</h2>
            <p>☐ Update Resume</p>
            <p>☐ Apply to 10 Companies</p>
            <p>☐ Solve 3 Leetcode Problems</p>
            <p>☐ Prepare for Interview</p>
          </div>

          <div style={{ ...sectionStyle, flex: 1, marginTop: 0 }}>
            <h2>DSA Progress</h2>
            <p>Arrays: 85%</p>
            <p>Linked List: 70%</p>
            <p>Trees: 50%</p>
            <p>Graphs: 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  color: "white",
  padding: "20px",
  borderRadius: "20px",
  width: "230px",
  height: "150px",
  boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
  textAlign: "center",
};

const sectionStyle = {
  background: "#1e293b",
  marginTop: "35px",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
};

export default App;