import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../lib/supabase";

function UpcomingEvents() {
  const { user } = useUser();
  const [events, setEvents] = useState([]);

  async function fetchUpcomingEvents() {
    if (!user) return;

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("user_id", user.id)
      .gte("event_date", today)
      .order("event_date", { ascending: true })
      .limit(5);

    if (!error) {
      setEvents(data || []);
    }
  }

  useEffect(() => {
    fetchUpcomingEvents();
  }, [user]);

  return (
    <section className="section">
      <h2>🔥 Upcoming Events</h2>

      <div className="cards">
        {events.length === 0 ? (
          <div className="card">
            <p>No upcoming events.</p>
          </div>
        ) : (
          events.map((event) => (
            <div className="card" key={event.id}>
              <h3>{event.title}</h3>

              <p>
                <b>Date:</b> {event.event_date}
              </p>

              <p>
                <b>Type:</b> {event.type}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default UpcomingEvents;