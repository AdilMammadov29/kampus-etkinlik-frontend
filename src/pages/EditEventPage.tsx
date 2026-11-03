import { useParams, useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventForm from '../components/forms/EventForm';
import NotFoundPage from './NotFoundPage';
import type { EventFormData } from '../types/campus-event';

function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === id);

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <div className="sayfa-icerik">
      <h2 className="bolum-baslik">Etkinliği Güncelle</h2>
      <EventForm
        initialData={event}
        submitText="Güncelle"
        onSubmit={(data: EventFormData) => {
          updateEvent(event.id, data);
          navigate('/admin');
        }}
        onCancel={() => navigate('/admin')}
      />
    </div>
  );
}

export default EditEventPage;