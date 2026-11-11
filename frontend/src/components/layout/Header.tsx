interface HeaderProps {
  title?: string;
  text?: string;
}

function Header({
  title = "Kampüs Etkinlikleri",
  text = "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.",
}: HeaderProps) {
  return (
    <header className="ust-alan">
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </header>
  );
}

export default Header;