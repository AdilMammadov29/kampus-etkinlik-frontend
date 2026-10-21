// src/components/forms/EventForm.tsx
import type { Category } from "../../types/campus-event";

interface EventFormProps {
  categories: Category[];
  onSubmit: () => void;
}

function EventForm({ categories, onSubmit }: EventFormProps) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="title" style={{ display: "block", marginBottom: "0.5rem" }}>
          Etkinlik Adı
        </label>
        <input id="title" type="text" maxLength={80} style={{ width: "100%", padding: "0.5rem" }} />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="description" style={{ display: "block", marginBottom: "0.5rem" }}>
          Açıklama
        </label>
        <textarea id="description" rows={5} style={{ width: "100%", padding: "0.5rem" }}></textarea>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="date" style={{ display: "block", marginBottom: "0.5rem" }}>
            Tarih
          </label>
          <input id="date" type="date" style={{ width: "100%", padding: "0.5rem" }} />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="category" style={{ display: "block", marginBottom: "0.5rem" }}>
            Kategori
          </label>
          <select id="category" style={{ width: "100%", padding: "0.5rem" }}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#2ecc71",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Kaydet (Sprint 6'da çalışacak)
      </button>
    </form>
  );
}

export default EventForm;