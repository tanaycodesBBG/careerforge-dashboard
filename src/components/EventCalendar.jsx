import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../lib/supabase";

function EventCalendar() {
  const { user } = useUser();

  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [type, setType] = useState("Interview");

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("user_id", user?.id)
      .order("event_date", { ascending: true });

    if (!error) {
      setEvents(data || []);
    }
  }

  async function addEvent() {
    if (!title || !eventDate) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("events")
      .insert([
        {
          user_id: user?.id,
          title,
          event_date: eventDate,
          type,
        },
      ]);

    if (error) {
      console.log(error);
      return;
    }

    setTitle("");
    setEventDate("");
    setType("Interview");

    fetchEvents();
  }
   async function deleteEvent(id) {
  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    alert("Delete failed");
    return;
  }

  fetchEvents();
}
function getEventColor(type) {
  if (type === "Interview") return "#38bdf8";
  if (type === "Deadline") return "#f97316";
  if (type === "Contest") return "#a78bfa";
  if (type === "Project") return "#22c55e";
  if (type === "Study Goal") return "#facc15";
  return "#38bdf8";
}
  useEffect(() => {
    if (user) {
      fetchEvents();
    }
  }, [user]);

  return (
    <section className="section">
      <h2>📅 Event Planner</h2>

      <div className="result">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Interview</option>
          <option>Deadline</option>
          <option>Contest</option>
          <option>Project</option>
          <option>Study Goal</option>
        </select>

        <button onClick={addEvent}>
          Add Event
        </button>
      </div>

      <div className="cards">
        {events.map((event) => (
          <div
  className="card"
  key={event.id}
  style={{
    borderTop: `5px solid ${getEventColor(event.type)}`
  }}
>
  <h3>{event.title}</h3>

  <p>
    <b>Date:</b> {event.event_date}
  </p>

  <p>
    <b>Type:</b> {event.type}
  </p>

  <button onClick={() => deleteEvent(event.id)}>
    Delete
  </button>
</div>
        ))}
      </div>
    </section>
  );
}

export default EventCalendar;