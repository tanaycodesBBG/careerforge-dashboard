import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function InternshipTracker() {
  const [internships, setInternships] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const { user } = useUser();
  async function fetchInternships() {
   const { data, error } = await supabase
  .from("internships")
  .select("*")
  .eq("user_id", user?.id)
  .order("created_at", { ascending: false });

    if (!error) {
      setInternships(data);
    }
  }

  async function addInternship() {
    if (!company || !role) {
      alert("Enter company and role");
      return;
    }

    const { error } = await supabase.from("internships").insert([
  {
    company,
    role,
    status,
    user_id: user?.id,
  },
]);

    if (error) {
      console.log(error);
      alert("Internship not added: " + error.message);
      return;
    }

    setCompany("");
    setRole("");
    setStatus("Applied");
    fetchInternships();
  }

  async function deleteInternship(id) {
    const { error } = await supabase
      .from("internships")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      alert("Delete failed");
      return;
    }

    fetchInternships();
  }
async function updateInternshipStatus(item) {
  let newStatus = "Applied";

  if (item.status === "Applied") {
    newStatus = "Interview";
  } else if (item.status === "Interview") {
    newStatus = "Selected";
  }

  const { error } = await supabase
    .from("internships")
    .update({
      status: newStatus,
    })
    .eq("id", item.id);

  if (error) {
    console.log(error);
    return;
  }

  fetchInternships();
}
  useEffect(() => {
  if (user) {
    fetchInternships();
  }
}, [user]);

  return (
    <section id="internships" className="section">
      <h2>Internship Tracker</h2>

      <div className="result">
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>

        <button onClick={addInternship}>Add Internship</button>
      </div>

      <div className="cards">
        {internships.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.company}</h3>

            <p>
              <b>Role:</b> {item.role}
            </p>

            <p>
              <b>Status:</b> {item.status}
            </p>
            <button
  onClick={() => updateInternshipStatus(item)}
>
  Update Status
</button>
            <button onClick={() => deleteInternship(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InternshipTracker;