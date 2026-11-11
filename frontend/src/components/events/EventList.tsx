import type { CampusEvent } from '../../types/campus-event';
import EventCard from './EventCard';

interface EventListProps {
  events: CampusEvent[];
}

function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return <p className="bilgi-metni">Henüz gösterilecek etkinlik bulunmuyor.</p>;
  }

  return (
    <div className="kart-izgara">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;