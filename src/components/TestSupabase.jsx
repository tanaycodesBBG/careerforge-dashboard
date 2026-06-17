import { useState } from "react";
import { supabase } from "../lib/supabase";

function TestSupabase() {
  const [message, setMessage] = useState("");

  async function testConnection() {
    const { data, error } = await supabase
      .from("projects")
      .select("*");

    if (error) {
      setMessage("Database connection failed");
      console.log(error);
    } else {
      setMessage(
        `Database connected successfully. Rows found: ${data.length}`
      );
    }
  }

  return (
    <section className="section">
      <h2>Database Test</h2>

      <button onClick={testConnection}>
        Test Database Connection
      </button>

      <p>{message}</p>
    </section>
  );
}

export default TestSupabase;