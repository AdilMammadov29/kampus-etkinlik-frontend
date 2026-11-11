import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventForm from '../components/forms/EventForm';
import type { EventFormData } from '../types/campus-event';

function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <div className="sayfa-icerik">
      <h2 className="bolum-baslik">Yeni Etkinlik</h2>
      <EventForm
        submitText="Kaydet"
        onSubmit={(data: EventFormData) => {
          addEvent(data);
          navigate('/admin');
        }}
        onCancel={() => navigate('/admin')}
      />
    </div>
  );
}

export default AddEventPage;