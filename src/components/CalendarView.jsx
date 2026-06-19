import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useUser } from "@clerk/clerk-react";
import { supabase } from "../lib/supabase";

function CalendarView() {
  const { user } = useUser();

  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    if (!user) return;

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("user_id", user.id);

    if (!error) {
      setEvents(data || []);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, [user]);

  return (
    <section className="section">
      <h2>🗓️ Calendar View</h2>

      <Calendar
  onChange={setDate}
  value={date}
  tileContent={({ date }) => {
    const formattedDate =
      date.toISOString().split("T")[0];

    const hasEvent = events.some(
      (event) => event.event_date === formattedDate
    );

    return hasEvent ? (
      <div
        style={{
          height: "8px",
          width: "8px",
          borderRadius: "50%",
          background: "#38bdf8",
          margin: "0 auto",
          marginTop: "2px",
        }}
      />
    ) : null;
  }}
/>

      <div className="result">
        <h3>
          Selected Date:
        </h3>

        <p>
          {date.toDateString()}
        </p>
      </div>

      <div className="cards">
        {events
          .filter(
            (event) =>
              event.event_date ===
              date.toISOString().split("T")[0]
          )
          .map((event) => (
            <div className="card" key={event.id}>
              <h3>{event.title}</h3>

              <p>
                <b>Type:</b> {event.type}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default CalendarView;