function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "linear-gradient(to bottom, #4f46e5, #2563eb)",
        color: "white",
        padding: "25px",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
<h1
  style={{
    fontSize: "38px",
    marginBottom: "10px",
  }}
>
  CareerForge
</h1>

      <p style={{ opacity: 0.8 }}>
        smart career tracking
      </p>

      <hr />

      <h3>Dashboard</h3>
      <h3>Applications</h3>
      <h3>Companies</h3>
      <h3>Interview Prep</h3>
      <h3>Schedule</h3>
      <h3>Resources</h3>
    </div>
  );
}

export default Sidebar;