export type EventCategory = 'Seminer' | 'Atölye' | 'Söyleşi' | 'Diğer';

export interface CampusEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  capacity: number;
  description: string;
}

export interface EventFormData {
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
}