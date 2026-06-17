import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ProjectTracker() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Planned");
  const [loading, setLoading] = useState(false);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setProjects(data);
  }

  async function addProject() {
    if (!title.trim()) {
      alert("Please enter a project title");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("projects").insert([
      {
        title: title,
        status: status,
      },
    ]);

    setLoading(false);

    if (error) {
      console.log(error);
      alert("Project not added");
      return;
    }

    setTitle("");
    setStatus("Planned");
    fetchProjects();
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <h2>Project Tracker</h2>

      <div className="result">
        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Planned</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button onClick={addProject}>
          {loading ? "Adding..." : "Add Project"}
        </button>
      </div>

      <div className="cards">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <h3>{project.title}</h3>
            <p>
              <b>Status:</b> {project.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectTracker;