import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CampusEvent, EventFormData } from "../types/campus-event";
import { initialEvents } from "../data/events";

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

function toEvent(id: string, data: EventFormData): CampusEvent {
  return {
    ...data,
    id,
    capacity: Number(data.capacity) || 0,
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  function addEvent(data: EventFormData) {
    const newId = `event-${Date.now()}`;
    setEvents((prev) => [...prev, toEvent(newId, data)]);
  }

  function updateEvent(id: string, data: EventFormData) {
    setEvents((prev) => prev.map((e) => (e.id === id ? toEvent(id, data) : e)));
  }

  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const value = useContext(EventsContext);
  if (value === null) {
    throw new Error("useEvents bir EventsProvider içinde kullanılmalıdır");
  }
  return value;
}