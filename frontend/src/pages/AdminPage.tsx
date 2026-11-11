import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';

function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  }

  return (
    <div className="sayfa-icerik">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className="bolum-baslik">Yönetim Paneli</h2>
        <Link to="/admin/new" className="buton">
          + Yeni Etkinlik
        </Link>
      </div>

      <table className="tablo">
        <thead>
          <tr>
            <th>Etkinlik</th>
            <th>Tarih</th>
            <th>Kategori</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td data-baslik="Etkinlik">{event.title}</td>
              <td data-baslik="Tarih">{event.date}</td>
              <td data-baslik="Kategori">{event.category}</td>
              <td data-baslik="İşlemler" className="islemler">
                <Link to={`/admin/${event.id}/edit`} className="buton buton-ikincil" style={{ padding: '0.3rem 0.6rem' }}>
                  Düzenle
                </Link>
                <button
                  onClick={() => handleDelete(event.id, event.title)}
                  className="buton buton-sil"
                  style={{ padding: '0.3rem 0.6rem' }}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;