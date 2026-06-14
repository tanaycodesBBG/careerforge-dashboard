function ProjectTracker() {
  const projects = [
    {
      name: "CareerForge Dashboard",
      status: "Completed",
    },
    {
      name: "Resume Analyzer",
      status: "In Progress",
    },
    {
      name: "Interview Tracker",
      status: "Planned",
    },
  ];

  return (
    <section className="section">
      <h2>Project Tracker</h2>

      <div className="cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.name}</h3>
            <p>Status: {project.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectTracker;