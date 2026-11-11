import { NavLink } from "react-router-dom";

const menuItems = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/events", label: "Etkinlikler" },
  { to: "/admin", label: "Yönetim" },
  { to: "/login", label: "Giriş" },
];

function Navigation() {
  return (
    <nav className="ana-navigasyon">
      <ul>
        {menuItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "aktif" : undefined)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;