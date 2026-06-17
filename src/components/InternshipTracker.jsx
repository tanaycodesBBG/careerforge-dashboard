import { useState } from "react";

function InternshipTracker() {
  const [internships, setInternships] = useState([
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
  ]);

  const nextStatus = {
    Target: "Preparing",
    Preparing: "Applied",
    Applied: "Interview",
    Interview: "Selected",
    Selected: "Selected",
  };

  function updateStatus(index) {
    const updated = [...internships];

    updated[index].status =
      nextStatus[updated[index].status];

    setInternships(updated);
  }

  return (
    <section id="internships" className="section">
      <h2>Internship Tracker</h2>

      <div className="cards">
        {internships.map((internship, index) => (
          <div className="card" key={index}>
            <h3>{internship.company}</h3>

            <p>
              <b>Role:</b> {internship.role}
            </p>

            <p>
              <b>Status:</b> {internship.status}
            </p>

            <button
              onClick={() => updateStatus(index)}
            >
              Update Status
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InternshipTracker;