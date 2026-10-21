// src/components/layout/Navigation.tsx
import type { PageName } from "../../types/page";

interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
}

const NAV_ITEMS: { name: PageName; label: string }[] = [
  { name: "home", label: "Ana Sayfa" },
  { name: "events", label: "Etkinlikler" },
  { name: "add", label: "Etkinlik Ekle" },
];

function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav className="menu">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.name}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.name);
          }}
          style={{
            textDecoration: current === item.name ? "underline" : "none",
            fontWeight: current === item.name ? "bold" : "normal",
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;