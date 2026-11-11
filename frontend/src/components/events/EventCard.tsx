import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";

interface EventCardProps {
  event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="kart">
      <h3>{event.title}</h3>
      <dl>
        <dt>Kategori</dt>
        <dd>{event.category}</dd>
        <dt>Tarih</dt>
        <dd>{event.date} {event.time}</dd>
        <dt>Yer</dt>
        <dd>{event.location}</dd>
      </dl>
      <Link to={`/events/${event.id}`} className="buton">
        Detayları gör
      </Link>
    </article>
  );
}

export default EventCard;