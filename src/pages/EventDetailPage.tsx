import { useParams, Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventDetail from "../components/events/EventDetail";
import NotFoundPage from "./NotFoundPage";

function EventDetailPage() {
  const { id } = useParams();
  const { events } = useEvents();

  const event = events.find((e) => e.id === id);

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <div className="sayfa-icerik">
      <div style={{ marginBottom: "1rem" }}>
        <h2 className="bolum-baslik" style={{ marginBottom: "0.25rem" }}>{event.title}</h2>
        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>{event.category} — {event.location}</p>
      </div>

      <EventDetail event={event} />

      <div style={{ marginTop: "1.5rem", display: "flex", gap: "10px" }}>
        <Link to="/events" className="buton buton-ikincil">
          ← Listeye dön
        </Link>
        <Link to={`/admin/${event.id}/edit`} className="buton">
          Bu etkinliği güncelle
        </Link>
      </div>
    </div>
  );
}

export default EventDetailPage;