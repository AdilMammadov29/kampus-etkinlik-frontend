import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventList from "../components/events/EventList";

function HomePage() {
  const { events } = useEvents();

  // En yakın 2 etkinliği al
  const upcoming = [...events].slice(0, 2);

  return (
    <div className="sayfa-icerik">
      <h2 className="bolum-baslik">Yaklaşan 2 Etkinlik</h2>
      <EventList events={upcoming} />

      <div style={{ marginTop: "1rem" }}>
        <Link to="/events" className="buton">
          Tüm etkinlikleri gör
        </Link>
      </div>
    </div>
  );
}

export default HomePage;