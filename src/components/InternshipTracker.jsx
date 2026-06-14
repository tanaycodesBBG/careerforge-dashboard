function InternshipTracker() {
  const internships = [
    {
      company: "Google",
      role: "Software Engineering Intern",
      status: "Target",
    },
    {
      company: "Microsoft",
      role: "Frontend Intern",
      status: "Preparing",
    },
    {
      company: "Startup",
      role: "React Developer Intern",
      status: "Applied",
    },
  ];

  return (
    <section className="section">
      <h2>Internship Tracker</h2>

      <div className="cards">
        {internships.map((internship, index) => (
          <div className="card" key={index}>
            <h3>{internship.company}</h3>
            <p><b>Role:</b> {internship.role}</p>
            <p><b>Status:</b> {internship.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InternshipTracker;