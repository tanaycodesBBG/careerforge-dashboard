import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../lib/supabase";

function ProjectTracker() {
  const { user } = useUser();

  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Planned");
  const [loading, setLoading] = useState(false);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setProjects(data || []);
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
        user_id: user?.id,
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

  async function deleteProject(id) {
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      alert("Delete failed");
      return;
    }

    fetchProjects();
  }

  async function updateStatus(project) {
    let newStatus = "Planned";

    if (project.status === "Planned") {
      newStatus = "In Progress";
    } else if (project.status === "In Progress") {
      newStatus = "Completed";
    }

    const { error } = await supabase
      .from("projects")
      .update({
        status: newStatus,
      })
      .eq("id", project.id);

    if (error) {
      console.log(error);
      return;
    }

    fetchProjects();
  }

  useEffect(() => {
    if (user) {
      fetchProjects();
    }
  }, [user]);

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

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
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

            <button
              onClick={() => updateStatus(project)}
            >
              Update Status
            </button>

            <button
              onClick={() => deleteProject(project.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectTracker;