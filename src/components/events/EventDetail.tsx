// src/components/events/EventDetail.tsx
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <article className="detay-sayfasi">
      <h2>{event.title}</h2>
      <p>
        <strong>Açıklama:</strong> {event.description}
      </p>
      <ul>
        <li>
          <strong>Tarih:</strong> {formatDate(event.date)}
        </li>
        <li>
          <strong>Yer:</strong> {event.location}
        </li>
        <li>
          <strong>Kategori:</strong> {event.category}
        </li>
        <li>
          <strong>Kalan Kontenjan:</strong> {event.quota}
        </li>
      </ul>
      <button onClick={onBack}>Listeye Dön</button>
      <button onClick={() => onEdit(event.id)} style={{ marginLeft: "10px" }}>
        Bu Etkinliği Güncelle
      </button>
    </article>
  );
}

export default EventDetail;