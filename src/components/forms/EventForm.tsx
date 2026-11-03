import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import type { CampusEvent, EventCategory, EventFormData } from '../../types/campus-event';
import { validateEvent } from '../../utils/validate-event';
import type { EventFormErrors } from '../../utils/validate-event';

interface EventFormProps {
  initialData?: CampusEvent;
  submitText?: string;
  onSubmit: (data: EventFormData) => void;
  onCancel: () => void;
}

const categories: EventCategory[] = ['Seminer', 'Atölye', 'Söyleşi', 'Diğer'];

function EventForm({ initialData, submitText = 'Kaydet', onSubmit, onCancel }: EventFormProps) {
  const [data, setData] = useState<EventFormData>({
    title: initialData?.title || '',
    category: (initialData?.category as EventCategory) || ('' as any),
    date: initialData?.date || '',
    time: initialData?.time || '',
    location: initialData?.location || '',
    capacity: initialData ? String(initialData.capacity) : '',
    description: initialData?.description || '',
  });

  const [errors, setErrors] = useState<EventFormErrors>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateEvent(data);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      onSubmit(data);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="form-kapsayici">
      <div className="form-grup">
        <label htmlFor="title">Etkinlik Başlığı</label>
        <input
          id="title"
          name="title"
          type="text"
          value={data.title}
          onChange={handleChange}
          aria-invalid={errors.title ? true : undefined}
        />
        {errors.title && <span className="hata-metni">{errors.title}</span>}
      </div>

      <div className="form-grup">
        <label htmlFor="category">Kategori</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={handleChange}
          aria-invalid={errors.category ? true : undefined}
        >
          <option value="">Seçiniz...</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && <span className="hata-metni">{errors.category}</span>}
      </div>

      <div className="form-grup">
        <label htmlFor="date">Tarih</label>
        <input
          id="date"
          name="date"
          type="date"
          value={data.date}
          onChange={handleChange}
          aria-invalid={errors.date ? true : undefined}
        />
        {errors.date && <span className="hata-metni">{errors.date}</span>}
      </div>

      <div className="form-grup">
        <label htmlFor="time">Saat</label>
        <input
          id="time"
          name="time"
          type="time"
          value={data.time}
          onChange={handleChange}
          aria-invalid={errors.time ? true : undefined}
        />
        {errors.time && <span className="hata-metni">{errors.time}</span>}
      </div>

      <div className="form-grup">
        <label htmlFor="location">Yer</label>
        <input
          id="location"
          name="location"
          type="text"
          value={data.location}
          onChange={handleChange}
          aria-invalid={errors.location ? true : undefined}
        />
        {errors.location && <span className="hata-metni">{errors.location}</span>}
      </div>

      <div className="form-grup">
        <label htmlFor="capacity">Kontenjan</label>
        <input
          id="capacity"
          name="capacity"
          type="number"
          value={data.capacity}
          onChange={handleChange}
          aria-invalid={errors.capacity ? true : undefined}
        />
        {errors.capacity && <span className="hata-metni">{errors.capacity}</span>}
      </div>

      <div className="form-grup">
        <label htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={data.description}
          onChange={handleChange}
          aria-invalid={errors.description ? true : undefined}
        />
        {errors.description && <span className="hata-metni">{errors.description}</span>}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        <button type="submit" className="buton">
          {submitText}
        </button>
        <button type="button" onClick={onCancel} className="buton buton-ikincil">
          İptal
        </button>
      </div>
    </form>
  );
}

export default EventForm;