import type { CampusEvent } from "../../types/campus-event";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="detay-kapsayici">
      <div className="detay-grid">
        <div className="detay-afis">
          <h2>{event.title}</h2>
          <p>{event.date} • {event.location}</p>
        </div>

        <div className="detay-kunye">
          <h3>Etkinlik Künyesi</h3>
          <dl>
            <dt>Tarih</dt>
            <dd>{event.date}, {event.time}</dd>
            <dt>Yer</dt>
            <dd>{event.location}</dd>
            <dt>Kategori</dt>
            <dd>{event.category}</dd>
            <dt>Kontenjan</dt>
            <dd>{event.capacity} kişi</dd>
          </dl>
        </div>
      </div>

      <div className="detay-aciklama-alani">
        <h3>Açıklama</h3>
        <p style={{ color: "#475569", lineHeight: "1.6" }}>{event.description}</p>
      </div>
    </article>
  );
}

export default EventDetail;