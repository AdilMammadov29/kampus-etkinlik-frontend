import type { CampusEvent, EventCategory } from "../types/campus-event";

export function filterByCategory(
  events: CampusEvent[],
  category: EventCategory | "Tümü"
): CampusEvent[] {
  if (!category || category === "Tümü") {
    return events;
  }
  return events.filter((e) => e.category === category);
}

export function searchEvents(events: CampusEvent[], searchText: string): CampusEvent[] {
  if (!searchText.trim()) {
    return events;
  }
  const query = searchText.toLowerCase();
  return events.filter(
    (e) =>
      e.title.toLowerCase().includes(query) ||
      e.location.toLowerCase().includes(query) ||
      (e.description && e.description.toLowerCase().includes(query))
  );
}