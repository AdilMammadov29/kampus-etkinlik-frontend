// src/components/forms/EventForm.tsx
interface EventFormProps {
  onSubmit: () => void;
}

function EventForm({ onSubmit }: EventFormProps) {
  return (
    <>
      <p>Bu sprintte form sadece görünüm; kayıt yapılmaz.</p>
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
          <input
            id="title"
            type="text"
            placeholder="Örn. Kariyer Günleri 2026"
            maxLength={80}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="category" style={{ display: "block", marginBottom: "0.5rem" }}>
            Kategori
          </label>
          <select id="category" style={{ width: "100%", padding: "0.5rem" }}>
            <option value="">Seçiniz</option>
            <option value="Seminer">Seminer</option>
            <option value="Atölye">Atölye</option>
            <option value="Söyleşi">Söyleşi</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="date" style={{ display: "block", marginBottom: "0.5rem" }}>
              Tarih
            </label>
            <input id="date" type="date" style={{ width: "100%", padding: "0.5rem" }} />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="time" style={{ display: "block", marginBottom: "0.5rem" }}>
              Saat
            </label>
            <input id="time" type="time" style={{ width: "100%", padding: "0.5rem" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="location" style={{ display: "block", marginBottom: "0.5rem" }}>
              Yer
            </label>
            <input
              id="location"
              type="text"
              placeholder="Örn. A Blok Konferans Salonu"
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="quota" style={{ display: "block", marginBottom: "0.5rem" }}>
              Kontenjan
            </label>
            <input id="quota" type="number" min={1} style={{ width: "100%", padding: "0.5rem" }} />
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="description" style={{ display: "block", marginBottom: "0.5rem" }}>
            Açıklama
          </label>
          <textarea id="description" rows={4} style={{ width: "100%", padding: "0.5rem" }}></textarea>
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
          Kaydet
        </button>
      </form>
    </>
  );
}

export default EventForm;