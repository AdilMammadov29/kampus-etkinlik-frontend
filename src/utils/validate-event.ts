import type { EventFormData } from '../types/campus-event';

export type EventFormErrors = Partial<Record<keyof EventFormData, string>>;

export function validateEvent(data: EventFormData): EventFormErrors {
  const errors: EventFormErrors = {};

  if (!data.title || data.title.trim().length < 3) {
    errors.title = 'En az 3 karakter olmalı.';
  }

  if (!data.category) {
    errors.category = 'Bir kategori seçin.';
  }

  if (!data.date) {
    errors.date = 'Tarih boş olamaz.';
  }

  if (!data.time) {
    errors.time = 'Saat boş olamaz.';
  }

  if (!data.location || data.location.trim().length === 0) {
    errors.location = 'Yer boş olamaz.';
  }

  const cap = Number(data.capacity);
  if (!Number.isInteger(cap) || cap < 1 || cap > 1000) {
    errors.capacity = '1 ile 1000 arasında tam sayı olmalı.';
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'En az 10 karakter olmalı.';
  }

  return errors;
}