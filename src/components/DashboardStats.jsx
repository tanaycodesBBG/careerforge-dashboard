import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../lib/supabase";

function DashboardStats() {
  const { user } = useUser();

  const [stats, setStats] = useState({
    projects: 0,
    internships: 0,
    events: 0,
    resumes: 0,
  });

  async function fetchStats() {
    if (!user) return;

    const { count: projectsCount } = await supabase
      .from("projects")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id);

    const { count: internshipsCount } = await supabase
      .from("internships")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id);

    const { count: eventsCount } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id);

    const { count: resumesCount } = await supabase
      .from("resumes")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id);

    setStats({
      projects: projectsCount || 0,
      internships: internshipsCount || 0,
      events: eventsCount || 0,
      resumes: resumesCount || 0,
    });
  }

  useEffect(() => {
    fetchStats();
  }, [user]);

  return (
    <section className="section">
      <h2>Dashboard Overview</h2>

      <div className="cards">
        <div className="card">
          <h3>📁 Projects</h3>
          <p>{stats.projects}</p>
        </div>

        <div className="card">
          <h3>💼 Internships</h3>
          <p>{stats.internships}</p>
        </div>

        <div className="card">
          <h3>📅 Events</h3>
          <p>{stats.events}</p>
        </div>

        <div className="card">
          <h3>📄 Resumes</h3>
          <p>{stats.resumes}</p>
        </div>
      </div>
    </section>
  );
}

export default DashboardStats;