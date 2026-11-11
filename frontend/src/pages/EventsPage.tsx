import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import EventList from "../components/events/EventList";
import EventFilter from "../components/events/EventFilter";
import { filterByCategory, searchEvents } from "../utils/filter-events";

function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("Tümü");

  const categories = [
    "Tümü",
    ...Array.from(new Set(events.map((e) => e.category))),
  ];

  const filtered = filterByCategory(
    searchEvents(events, searchText),
    category as any
  );

  return (
    <div className="sayfa-icerik">
      <h2 className="bolum-baslik">Etkinlikler</h2>
      <p style={{ color: "#64748b", marginBottom: "1rem", fontSize: "0.95rem" }}>
        {filtered.length} etkinlik listeleniyor.
      </p>

      <EventFilter
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />

      <EventList events={filtered} />
    </div>
  );
}

export default EventsPage;