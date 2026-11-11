interface EventFilterProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

function EventFilter({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}: EventFilterProps) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Etkinlik veya yer ara..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "0.55rem 0.75rem",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onCategoryChange(cat)}
            className={`buton ${category === cat ? "" : "buton-ikincil"}`}
            style={{ padding: "0.35rem 0.85rem", fontSize: "0.85rem" }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EventFilter;