// src/App.tsx
import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
  }

  useEffect(() => {
    let title = "Kampüs Etkinlikleri";
    if (page === "detail" && selectedId) {
      const e = findEventById(events, selectedId);
      if (e) title = `Kampüs Etkinlikleri — ${e.title}`;
    } else if (page === "add") {
      title = "Etkinlik Ekle — Kampüs Etkinlikleri";
    }
    document.title = title;
  }, [page, selectedId]);

  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const filtered = filterByCategory(searchEvents(events, searchText), category);
  const categories = [...new Set(events.map((e) => e.category))];
  const selectedEvent = selectedId ? findEventById(events, selectedId) : undefined;

  return (
    <>
      <Header
        title={
          page === "detail" && selectedEvent
            ? selectedEvent.title
            : page === "events"
            ? "Tüm Etkinlikler"
            : page === "add"
            ? "Etkinlik Ekle"
            : page === "update"
            ? "Etkinliği Güncelle"
            : "Kampüs Etkinlikleri"
        }
        text={
          page === "home"
            ? "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin."
            : undefined
        }
      />

      <Navigation current={page} onNavigate={(p) => go(p)} />

      <main>
        {page === "home" && (
          <div>
            <h2>Yaklaşan 2 Etkinlik</h2>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} />
          </div>
        )}

        {page === "events" && (
          <div>
            <EventFilter
              searchText={searchText}
              category={category}
              categories={categories}
              onSearchChange={setSearchText}
              onCategoryChange={setCategory}
            />
            <p className="sonuc">
              {filtered.length === 0 ? "Etkinlik bulunamadı." : `${filtered.length} etkinlik listeleniyor.`}
            </p>
            <EventList
              events={filtered}
              onShowDetail={(id) => go("detail", id)}
              emptyText="Aramanıza uygun etkinlik bulunamadı."
            />
          </div>
        )}

        {page === "detail" && selectedEvent && (
          <EventDetail
            event={selectedEvent}
            onBack={() => go("events")}
            onEdit={(id) => go("update", id)}
          />
        )}

        {page === "detail" && !selectedEvent && (
          <div>
            <p>Etkinlik bulunamadı.</p>
            <button onClick={() => go("events")}>Listeye Dön</button>
          </div>
        )}

        {(page === "add" || page === "update") && (
          <div>
            <EventForm
              categories={categories}
              onSubmit={() => window.scrollTo(0, 0)}
            />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;